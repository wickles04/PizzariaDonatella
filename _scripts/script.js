// $("div#testemunhos ul:eq(0)").css('opacity', 0)
// $("div#testemunhos ul:eq(1)").css('opacity', 0)
// $("div#testemunhos ul:eq(2)").css('opacity', 0)
$('section#domingo-perfeito').waypoint(function(direcao){
    if(direcao == "down"){
        $('div.folha1').addClass('animate__animated animate__fadeInUp');
        $('div.folha3').addClass('animate__animated animate__fadeInUp');
        $('div.camarao').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div.tomate').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div.folha2').addClass('animate__animated animate__fadeInUp animate__slower');
        $('div.queijo').addClass('animate__animated animate__fadeInUp animate__slower');
 
 
    }
    else if(direcao == "up"){
        $('div.folha1').removeClass('animate__animated animate__fadeInUp');
        $('div.folha3').removeClass('animate__animated animate__fadeInUp');
        $('div.camarao').removeClass('animate__animated animate__fadeInUp animate__slow');
        $('div.tomate').removeClass('animate__animated animate__fadeInUp animate__slow');
        $('div.folha2').removeClass('animate__animated animate__fadeInUp animate__slower');
        $('div.queijo').removeClass('animate__animated animate__fadeInUp animate__slower');
    }
    else{}
 
}, {offset: '450px;'})
$('section#pizza').waypoint(function(direcao){
    if(direcao == 'down'){
        $('section#pizza p').addClass('animate__animated animate__fadeInUp')
        $('section#pizza div.pizza-opcoes').addClass('animate__animated animate__fadeInUp animate__slow')
    }
    if(direcao == 'up'){
        $('section#pizza p').removeClass('animate__animated animate__fadeInUp')
        $('section#pizza div.pizza-opcoes').removeClass('animate__animated animate__fadeInUp animate__slow')
    }
}, {offset: '450px;'})

$("div#testemunhos ul:eq(0)").css('opacity', 0)
$("div#testemunhos ul:eq(1)").css('opacity', 0)
$("div#testemunhos ul:eq(2)").css('opacity', 0)

$('section#testemunha').waypoint(function(direcao){
    if(direcao == 'down'){
        $("div#testemunhos ul:eq(0)").addClass('animate__animated animate__fadeInUp animate__slower')

        $("div#testemunhos ul:eq(1)").addClass('animate__animated animate__fadeInUp animate__slow')

        $("div#testemunhos ul:eq(2)").addClass('animate__animated animate__fadeInUp animate__slower')
    }
    if(direcao  == 'up'){
        $("div#testemunhos ul:eq(0)").removeClass('animate__animated animate__fadeInUp animate__slower')

        $("div#testemunhos ul:eq(1)").removeClass('animate__animated animate__fadeInUp animate__slow')

        $("div#testemunhos ul:eq(2)").removeClass('animate__animated animate__fadeInUp animate__slower')
    }
},{offset: '450px;'})

$('div#transicao-testemunha-plano').waypoint(function (direcao) {
    if (direcao == 'down') {
        $('div#decoracao1').removeClass('animate__animated animate__fadeOutLeft animate__slow')
        $('div#decoracao2').removeClass('animate__animated animate__fadeOut animate__slow')
        $('div#decoracao3').removeClass('animate__animated animate__fadeOutRight animate__slow')

        $('div#decoracao1').addClass('animate__animated animate__fadeInLeft animate__slow')
        $('div#decoracao2').addClass('animate__animated animate__fadeIn animate__slow')
        $('div#decoracao3').addClass('animate__animated animate__fadeInRight animate__slow')
    }else{
        $('div#decoracao1').addClass('animate__animated animate__fadeOutLeft animate__slow')
        $('div#decoracao2').addClass('animate__animated animate__fadeOut animate__slow')
        $('div#decoracao3').addClass('animate__animated animate__fadeOutRight animate__slow')
    }
}, {
    offset:'600px;'
})
$('section#plano-principal').waypoint(function (direcao) {
    
    if (direcao == 'down') {
        $('div.planos:eq(0)').addClass('animate__animated animate__fadeInLeft animate_slower');
        $('div.planos:eq(1)').addClass('animate__animated animate__fadeInUp animate_slow');
        $('div.planos:eq(2)').addClass('animate__animated animate__fadeInRight animate_slower');
    } else{
        $('div.planos:eq(0)').removeClass('animate__animated animate__fadeInLeft animate_slower');
        $('div.planos:eq(1)').removeClass('animate__animated animate__fadeInUp animate_slow');
        $('div.planos:eq(2)').removeClass('animate__animated animate__fadeInRight animate_slower');
    }
}, {
    offset:'450px;'
})

