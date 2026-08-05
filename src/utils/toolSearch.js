function normalizeText(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase();
}

export function getToolCategories(tools) {
  return [...new Set(tools.map((tool) => tool.category).filter(Boolean))]
    .sort((firstCategory, secondCategory) =>
      firstCategory.localeCompare(secondCategory),
    );
}

function createSearchableText(tool) {
  return [
    tool.title,
    tool.category,
    tool.description,
    ...(tool.keywords ?? []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function calculateRelevance(tool, normalizedQuery) {
  if (!normalizedQuery) {
    return 0;
  }

  const title = normalizeText(tool.title);
  const category = normalizeText(tool.category);
  const description = normalizeText(tool.description);
  const keywords = (tool.keywords ?? []).map(normalizeText);

  let score = 0;

  if (title === normalizedQuery) {
    score += 100;
  } else if (title.startsWith(normalizedQuery)) {
    score += 70;
  } else if (title.includes(normalizedQuery)) {
    score += 50;
  }

  if (keywords.some((keyword) => keyword === normalizedQuery)) {
    score += 40;
  } else if (
    keywords.some((keyword) => keyword.includes(normalizedQuery))
  ) {
    score += 25;
  }

  if (category === normalizedQuery) {
    score += 30;
  } else if (category.includes(normalizedQuery)) {
    score += 15;
  }

  if (description.includes(normalizedQuery)) {
    score += 10;
  }

  if (tool.featured) {
    score += 3;
  }

  if (tool.popular) {
    score += 2;
  }

  if (tool.new) {
    score += 1;
  }

  return score;
}

export function filterAndSortTools(
  tools,
  {
    query = "",
    category = "all",
    status = "all",
    sort = "relevance",
  } = {},
) {
  const normalizedQuery = normalizeText(query);

  const filteredTools = tools
    .filter((tool) => {
      if (
        category !== "all" &&
        normalizeText(tool.category) !== normalizeText(category)
      ) {
        return false;
      }

      if (status === "featured" && !tool.featured) {
        return false;
      }

      if (status === "popular" && !tool.popular) {
        return false;
      }

      if (status === "new" && !tool.new) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      return createSearchableText(tool).includes(normalizedQuery);
    })
    .map((tool) => ({
      ...tool,
      searchRelevance: calculateRelevance(tool, normalizedQuery),
    }));

  return filteredTools.sort((firstTool, secondTool) => {
    if (sort === "name") {
      return firstTool.title.localeCompare(secondTool.title);
    }

    if (sort === "newest") {
      return Number(secondTool.id) - Number(firstTool.id);
    }

    if (sort === "popular") {
      if (firstTool.popular !== secondTool.popular) {
        return Number(secondTool.popular) - Number(firstTool.popular);
      }

      if (firstTool.featured !== secondTool.featured) {
        return Number(secondTool.featured) - Number(firstTool.featured);
      }

      return firstTool.title.localeCompare(secondTool.title);
    }

    if (normalizedQuery) {
      if (firstTool.searchRelevance !== secondTool.searchRelevance) {
        return secondTool.searchRelevance - firstTool.searchRelevance;
      }
    }

    return Number(firstTool.id) - Number(secondTool.id);
  });
}
