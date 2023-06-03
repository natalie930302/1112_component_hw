const pagination = body.querySelector(".pagination-wrap");
const paginationRightBtn = pagination.querySelector(".btn-nav.next");
const paginationLeftBtn = pagination.querySelector(".btn-nav.prev");
const paginationRow = pagination.querySelector(".page-numbers");
let paginationItems = paginationRow.querySelectorAll(".btn-page");
let activePaginationPage = 4;
let maxPaginationPage = 30;

function setPagination(pageNum) {
  activePaginationPage = pageNum;
  var paginationHTML = ``;
  if (activePaginationPage <= 4) {
    for (var i = 1; i <= 5; i++) {
      var partHTML =
        '<button class="btn-page ' +
        (i == activePaginationPage ? "active" : "") +
        '">' +
        i +
        "</button>";
      paginationHTML = paginationHTML + partHTML;
    }
    paginationHTML =
      paginationHTML +
      '<span class="dots">...</span><button class="btn-page">' +
      maxPaginationPage +
      "</button>";
  }
  if (activePaginationPage > maxPaginationPage - 4) {
    paginationHTML =
      paginationHTML +
      '<button class="btn-page">1</button><span class="dots">...</span>';
    for (var i = maxPaginationPage - 4; i <= maxPaginationPage; i++) {
      var partHTML =
        '<button class="btn-page ' +
        (i == activePaginationPage ? "active" : "") +
        '">' +
        i +
        "</button>";
      paginationHTML = paginationHTML + partHTML;
    }
  }
  if (
    activePaginationPage > 4 &&
    activePaginationPage <= maxPaginationPage - 4
  ) {
    paginationHTML =
      paginationHTML +
      '<button class="btn-page">1</button><span class="dots">...</span>';
    for (var i = activePaginationPage - 1; i <= activePaginationPage + 1; i++) {
      var partHTML =
        '<button class="btn-page ' +
        (i == activePaginationPage ? "active" : "") +
        '">' +
        i +
        "</button>";
      paginationHTML = paginationHTML + partHTML;
    }
    paginationHTML =
      paginationHTML +
      '<span class="dots">...</span><button class="btn-page">' +
      maxPaginationPage +
      "</button>";
  }
  paginationRow.innerHTML = paginationHTML;
  paginationItems = paginationRow.querySelectorAll(".btn-page");
  paginationItems.forEach((item) => {
    item.addEventListener("click", () =>
      setPagination(parseInt(item.textContent))
    );
  });
}
setPagination(activePaginationPage);

paginationRightBtn.addEventListener("click", () =>
  setPagination(
    activePaginationPage == maxPaginationPage
      ? maxPaginationPage
      : activePaginationPage + 1
  )
);

paginationLeftBtn.addEventListener("click", () =>
  setPagination(activePaginationPage == 1 ? 1 : activePaginationPage - 1)
);
