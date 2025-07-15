export const PageSEOAppender = ({ title = "", meta = [] }) => {
  // Set the document title
  if (title) {
    document.title = title;
  }

  // Loop through each meta tag definition
  meta.forEach(({ name, content }) => {
    // Convert array content (e.g., keywords) to comma-separated string
    const metaContent = Array.isArray(content) ? content.join(", ") : content;

    // Try to find existing meta tag
    let metaTag = document.querySelector(`meta[name="${name}"]`);

    if (metaTag) {
      metaTag.setAttribute("content", metaContent);
    } else {
      metaTag = document.createElement("meta");
      metaTag.setAttribute("name", name);
      metaTag.setAttribute("content", metaContent);
      document.head.appendChild(metaTag);
    }
  });
};