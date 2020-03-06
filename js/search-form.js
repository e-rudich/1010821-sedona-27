var searchLink = document.querySelector(".pop-up-caller");
var searchForm = document.querySelector(".pop-up-search-form");
var form = searchForm.querySelector("form");
var checkIn = searchForm.querySelector("[name=date-check-in]");
var checkOut = searchForm.querySelector("[name=date-check-out]");
var adultsNumber = searchForm.querySelector("[name=grown-ups]");

if (searchForm) {
    searchForm.classList.add("search-form-hide");
}

searchLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchForm.classList.remove("search-form-error");
    searchForm.classList.toggle("search-form-hide");
});

form.addEventListener("submit", function (evt) {
    if (!checkIn.value || !checkOut.value || !adultsNumber.value) {
      evt.preventDefault();
      searchForm.classList.remove("search-form-error");
      searchForm.offsetWidth = searchForm.offsetWidth;
      searchForm.classList.add("search-form-error");
    }
});