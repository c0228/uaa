export const CreateId = (text) => {
    return text
        .toLowerCase()
        .replace(/[^\w\s]/g, " ")      // Remove symbols (/, •, -, etc.)
        .replace(/\s+/g, "_")          // Replace spaces with _
        .replace(/_+/g, "_")           // Remove consecutive _
        .replace(/^_+|_+$/g, "");      // Trim leading/trailing _
};