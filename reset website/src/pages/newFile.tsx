import { articles } from "./[blogId].astro";

articles.forEach((article) => {
if (article.fieldId === "rich_editor") {
html = article.rich_editor;
}

else if (article.fieldId === "image") {
url = article.image.url;
height = article.image.height;
width = article.image.width;
}
else {
text = [article.text];
console.log(text[1]);

}
});
