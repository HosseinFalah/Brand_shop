const $ = document;

const allTabs = $.querySelectorAll('#btn_links');
const allContent = $.querySelectorAll('.tab_content');

allTabs.forEach(tab => {
    tab.addEventListener('click', (e) => TabChange(e))
})

const TabChange = (e) => {
    //Find Id Content Your Clicked
    const mainContentID = e.target.dataset.id;
    //Find Content Your Clicked
    const mainContent = $.querySelector(`#${mainContentID}`);
    // Hidden All Content
    allContent.forEach(content => content.classList.remove('active'));
    //Show Content
    mainContent.classList.add('active');
}