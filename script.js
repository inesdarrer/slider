$(document).ready(() => {
    let rowTop = document.getElementsByClassName(".row-top .row-inner-wrapper");
    let rowBottom = document.getElementsByClassName(".row-bottom .row-inner-wrapper");

    $(".arrow-previous").on("click", () => {

        $(".to-remove").remove();

        let imagesTop = rowTop.find("img");
        let imagesBottom = rowBottom.find("img");

        //let currentTop = imagesTop[imagesTop.length - 1];
        let currentTop = imagesTop[0];
        let imageWidthTop = $(currentTop).outerWidth();

        let currentBottom = imagesBottom[0];
        let imageWidthBottom = $(currentBottom).outerWidth();

        let lastTop = $(currentTop).clone();
        $(currentTop).addClass("to-remove");

        lastTop.animate({ "marginRight": `-${imageWidthTop}px`},
          {
            complete: () => {
              rowTop.append(lastTop);
              lastTop.show().animate({ "marginRight": "0px" });
            }
          });


        let lastBottom = $(currentBottom).clone();
        $(currentBottom).addClass("to-remove");

        lastBottom.animate({ "marginRight": `-${imageWidthBottom}px`},
          {
            complete: () => {
              rowBottom.append(lastBottom);
              lastBottom.show().animate({ "marginRight": "0px" });
            }
          });
      });

    $(".arrow-next").on("click", () => {
        $(".to-remove").remove();

        let imagesTop = rowTop.find("img");
        let imagesBottom = rowBottom.find("img");

        let currentTop = imagesTop[imagesTop.lenght - 0];
        let imageWidthTop = $(currentTop).outerWidth();

        let currentBottom = imagesBottom[imagesBottom.lenght - 1];
        let imageWidthBottom = $(currentBottom).outerWidth();

        let lastTop = $(currentTop).clone();
        $(currentTop).addClass("to-remove");

        rowTop.find(".to-remove").animate({ "marginRight": `-${imageWidthTop}px` },
          {
            complete: () => {
              rowTop.prepend(lastTop);
            }
          });

          let lastBottom = $(currentBottom).clone();
        $(currentBottom).addClass("to-remove");

        rowBottom.find(".to-remove").animate({ "marginRight": `-${imageWidthBottom}px` },
        {
          complete: () => {
            rowBottom.prepend(lastBottom);
          }
          });
      });

  });
