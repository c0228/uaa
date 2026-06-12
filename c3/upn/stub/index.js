import fs from 'fs';

try {
    const data = fs.readFileSync('./static-data/data-app-cache.json', 'utf8');
    const jsonData = JSON.parse(data);
    const categoriesData = jsonData?.cacheData?.niches;
    const categories = Object.keys(categoriesData);

    

    let query = "";
    for(let i=0;i<categories.length;i++){
        const categoryId = categories[i];
        const categoryName = categoriesData[categoryId]?.label;
        query+="INSERT INTO app_dca_categories(cat_id, cat_name) VALUES ('"+categoryId+"','"+categoryName+"');\n";

        const subCategoriesData = categoriesData[categoryId]?.subcategories;
        const subCategories = Object.keys(subCategoriesData);

        for(let j=0;j<subCategories.length;j++){
            const subCategoryId = subCategories[j];
            const subCategoryName = subCategoriesData[subCategoryId]?.label;
            query+="INSERT INTO app_dca_subcategories(subcat_id, subcat_name, cat_id) ";
            query+="VALUES ('"+subCategoryId+"','"+subCategoryName+"','"+categoryId+"');\n";
        }
    }



     // Save to output file
    fs.writeFileSync(
        './output.txt',
        query,
        'utf8'
    );
} catch (err) {
    console.error('Error reading JSON file:', err);
}