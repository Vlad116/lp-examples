// Owl Carousel
$(() => {
    let owl = $(".owl-carousel");

    owl.owlCarousel({
        items: 1,
        loop: false,
        nav: false,
        dots: true
    });

    const onCardClick = (index) => {
        owl.trigger('to.owl.carousel', [index]);
        let featureCards = $(".feature-cards-list").children('.feature-card')
        featureCards.toArray().forEach((element, index) => {
            if (element.classList.contains('active')) {
                featureCards[index].classList.remove('active')
            }
        })
        featureCards[index].classList.add('active')
    }

    $('#firstCard').click(function() {
        onCardClick(0)
    })

    $('#secondCard').click(function() {
        onCardClick(1)

    })

    $('#thirdCard').click(function() {
        onCardClick(2)
    })
});

$(document).ready(() => {

    let container = $('.cloud-services-info-integrations-content-overflow'),
        hopDistance = 10,
        interval = 10,
        intervalID;

    $('#moveLeftCloudCards').on({
        mousedown: () => {
            intervalID = setInterval(() => {
                container.scrollLeft(container.scrollLeft() - hopDistance);
            }, interval)
        },
        mouseup: () => {
            clearInterval(intervalID);
        }
    })
    $('#moveRightCloudCards').on({
        mousedown: () => {
            intervalID = setInterval(() => {
                container.scrollLeft(container.scrollLeft() + hopDistance);
            }, interval)
        },
        mouseup: () => {
            clearInterval(intervalID);
        }
    })

    let secondContainer = $('.functions-cards-list-overflow')

    $('#functionsCardPrevBtn').on({
        mousedown: () => {
            intervalID = setInterval(() => {
                secondContainer.scrollLeft(secondContainer.scrollLeft() - hopDistance);
            }, interval)
        },
        mouseup: () => {
            clearInterval(intervalID);
        }
    })
    $('#functionsCardNextBtn').on({
        mousedown: () => {
            intervalID = setInterval(() => {
                secondContainer.scrollLeft(secondContainer.scrollLeft() + hopDistance);
            }, interval)
        },
        mouseup: () => {
            clearInterval(intervalID);
        }
    })
})