/**
 * Created by Clandor on 20/02/2019.
 */

/*if (localStorage.getItem('reading_name') != 'null') {
    window.location.href = $('.info-data .menu-btn').attr('href');
}*/

var valueTest     = 2.5;
/*var countWrittenT = 3;
$('#checkWordsCount').html(countWrittenT);*/

function checkWrittenUp() {
    var checkFinishTemp = 0;

    $('.readingAudio input').each(function () {
        if ($(this).val() != $(this).data('required')) {
            checkFinishTemp = 1;
        }
    });

    if (checkFinishTemp == 0) {
        swal("Congratulations!", "Have answered correctly", "success");
    }
}

//beautiful legend
//romance
//wonderful love
//aztecs
//with time
//love would flourish
//enjoyed
//mountain
//sun god Tonatiuh
//appreciate
//smile
//beautiful


function saveResults() {
    var duration        = '' + $('#Minutos').html().replace(/:/gi, "") + '&nbsp;:&nbsp;' + $('#Segundos').html().replace(/:/gi, "") + '&nbsp;:&nbsp;' + $('#Centesimas').html().replace(/:/gi, "");
    var valueForCorrect = (valueTest / $('.readingAudio input').length).toFixed(2);
    var countCorrect    = 0;

    $('.readingAudio input').each(function () {
        if ($(this).val() == $(this).data('required')) {
            countCorrect++;
        }
    });

    var points = countCorrect * valueForCorrect;

    if (points > valueTest) {
        points = valueTest;
    }

    localStorage.setItem('reading_name', $('.section-title span').html());
    localStorage.setItem('reading_time', duration);
    localStorage.setItem('reading_points', points);
}

$(document).on('keyup', '.readingAudio input', function () {
    checkWrittenUp();
});

/*$(document).on('click', '#checkWordsBtn', function () {
    $('.readingAudio input').each(function () {
        if ($(this).val() != $(this).data('required')) {
            $(this).addClass('errorText');
        }
    });

    setTimeout(function () {
        $('.readingAudio input.errorText').removeClass('errorText')
    }, 3000)
});*/

$(document).on('click', '#finishWords', function () {
    $('#controlWordsAudio').remove();
    parar();
    saveResults();
    finishBtn();
});
