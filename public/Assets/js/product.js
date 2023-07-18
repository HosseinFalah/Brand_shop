const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
    },
    grabCursor: true,

});

const $ = document

const btnWrapper = $.querySelector('.btn_wrapper')
const allTabs = $.querySelectorAll('#tab_links');
const allContents = $.querySelectorAll('.tab_content');
const btnCopyLink = $.querySelector('#copy-link');
const tabImg = $.querySelectorAll('#product_details');
const mainImg = $.querySelector('#mainProductImg');
const mainImgModal = $.querySelector('#modal_product_img');

const copyLinkClipBord = () => {
    const Link = location.href;
    navigator.clipboard.writeText(Link)
        .then(() => {
            swal({
                title: "عملیات موفقعیت آمیزبود",
                text: "لینک صفحه با موفقعیت کپی شد",
                icon: "success",
                button: "اوکی",
              });
        })
}

tabImg.forEach(tab => {
    tab.addEventListener('click', (e) => {
        mainImg.src = e.target.src;
        mainImgModal.src = e.target.src;
    });
});

btnWrapper.addEventListener('click', (e) => {
    const mainContentID = e.target.dataset.id;
    const mainContent = $.querySelector(`#${mainContentID}`);

    allContents.forEach(contetn => contetn.classList.remove('active'));
    mainContent.classList.add('active');
});

btnCopyLink.addEventListener('click', () => copyLinkClipBord())