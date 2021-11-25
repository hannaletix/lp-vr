function showContentNavVantagens() {
  hasClass = document.getElementById('nav-vantagens-vr').classList.contains('active-menu-mobile');
  if (hasClass == false) {
    document.getElementById('contentNavVant').style.animation = 'showContentNavVant 1.5s ease forwards';
    document.getElementById('iconNavVant').style.transform = 'rotate(180deg)';
    document.getElementById('nav-vantagens-vr').classList.add("active-menu-mobile");

  } else {
    document.getElementById('contentNavVant').style.animation = 'hideContentNavVant 1.5s ease forwards';
    document.getElementById('iconNavVant').style.transform = 'rotate(0deg)';
    document.getElementById('nav-vantagens-vr').classList.remove("active-menu-mobile");
  }
}

function clickedNavVantagens() {
  document.getElementById('contentNavVant').style.animation = 'hideContentNavVant 1.5s ease forwards';
  document.getElementById('iconNavVant').style.transform = 'rotate(0deg)';
  document.getElementById('nav-vantagens-vr').classList.remove("active-menu-mobile");
}

function showContentAcessAcount() {
  hasClass = document.getElementById('content-acess-account').classList.contains('active-menu-mobile');
  if (hasClass == false) {
    document.getElementById('content-acess-account').style.animation = 'showContentAcessAcount 1s ease forwards';
    document.getElementById('content-acess-account').classList.add("active-menu-mobile");

  } else {
    document.getElementById('content-acess-account').style.animation = 'hideContentAcessAcount 1s ease forwards';
    document.getElementById('content-acess-account').classList.remove("active-menu-mobile");
  }
}

function openMenuMobile() {
  document.querySelector('html').style.overflow = 'hidden';
  document.querySelector('body').style.overflow = 'hidden';
  hasClass = document.getElementById('content-menu-account').classList.contains('active-menu-mobile');
  if (hasClass == false) {
    document.getElementById('content-menu-account').style.animation = 'showContentMenuAccount 1s ease forwards';
    document.getElementById('content-menu-account').classList.add("active-menu-mobile");
  } else {
    document.getElementById('content-menu-account').style.animation = 'hideContentMenuAccount 1s ease forwards';
    document.getElementById('content-menu-account').classList.remove("active-menu-mobile");
    document.querySelector('html').style.overflow = 'auto';
    document.querySelector('body').style.overflow = 'auto';
  }
}

function openSubmenuPraSuaEmpresa() {
  hasClass = document.getElementById('submenu-praSuaEmpresa').classList.contains('active-menu-mobile');
  if (hasClass == false) {
    document.getElementById('submenu-praSuaEmpresa').style.animation = 'showSubmenu 1s ease forwards';
    document.getElementById('submenu-praSuaEmpresa').style.display = 'block';
    document.getElementById('submenu-praSuaEmpresa').classList.add("active-menu-mobile");

  } else {
    document.getElementById('submenu-praSuaEmpresa').style.animation = 'showSubmenu 1s ease forwards';
    document.getElementById('submenu-praSuaEmpresa').style.display = 'none';
    document.getElementById('submenu-praSuaEmpresa').classList.remove("active-menu-mobile");
  }
}

function openSubmenuEstabelecimento() {
  hasClass = document.getElementById('submenu-estabelecimento').classList.contains('active-menu-mobile');
  if (hasClass == false) {
    document.getElementById('submenu-estabelecimento').style.animation = 'showSubmenu 1s ease forwards';
    document.getElementById('submenu-estabelecimento').style.display = 'block';
    document.getElementById('submenu-estabelecimento').classList.add("active-menu-mobile");

  } else {
    document.getElementById('submenu-estabelecimento').style.animation = 'showSubmenu 1s ease forwards';
    document.getElementById('submenu-estabelecimento').style.display = 'none';
    document.getElementById('submenu-estabelecimento').classList.remove("active-menu-mobile");
  }
}

function openSubmenuPraVoce() {
  hasClass = document.getElementById('submenu-vendaVr').classList.contains('active-menu-mobile');
  if (hasClass == false) {
    document.getElementById('submenu-vendaVr').style.animation = 'showSubmenu 1s ease forwards';
    document.getElementById('submenu-vendaVr').style.display = 'block';
    document.getElementById('submenu-vendaVr').classList.add("active-menu-mobile");

  } else {
    document.getElementById('submenu-vendaVr').style.animation = 'showSubmenu 1s ease forwards';
    document.getElementById('submenu-vendaVr').style.display = 'none';
    document.getElementById('submenu-vendaVr').classList.remove("active-menu-mobile");
  }
}

function openSubmenuSobreVR() {
  hasClass = document.getElementById('submenu-sobreVR').classList.contains('active-menu-mobile');
  if (hasClass == false) {
    document.getElementById('submenu-sobreVR').style.animation = 'showSubmenu 1s ease forwards';
    document.getElementById('submenu-sobreVR').style.display = 'block';
    document.getElementById('submenu-sobreVR').classList.add("active-menu-mobile");

  } else {
    document.getElementById('submenu-sobreVR').style.animation = 'showSubmenu 1s ease forwards';
    document.getElementById('submenu-sobreVR').style.display = 'none';
    document.getElementById('submenu-sobreVR').classList.remove("active-menu-mobile");
  }
}

function shake() {
  document.getElementById("vr-text-form2").className = 'shaker';
  document.getElementById("vr-text-form2").innerHTML = 'Todos os campos são obrigatórios.';
  setTimeout(function () {
    document.getElementById("vr-text-form2").className = 'vr-text-form2';
  }, 500);
}

function validaTelefoneNacional(telefone) {
  var retorno = false;
  //cast para string
  if (typeof telefone != "string") {
    telefone = telefone.toString();
  }
  //limpa string para validacao
  telefone = telefone.replace(/\D/g, "");
  //aplica ER
  var valida = telefone.match(/^((5{2})?(\d{2})?([987])?(\d{4})(\d{4}))$/);
  if (valida) {
    //prefixo e sufixo já é um telefone
    if (valida[5] && valida[6]) {
      retorno = fone = valida[5] + valida[6];
      //caso celular
      if (valida[4]) {
        retorno = valida[4] + fone;
      }
      if (valida[2] && valida[3] || valida[3]) {
        retorno = valida[2] + valida[3] + fone;
        //caso celular
        if (valida[4]) {
          retorno = valida[2] + valida[3] + valida[4] + fone;
        }
        if (!valida[2]) {
          retorno = valida[3] + fone;
          //caso celular
          if (valida[4]) {
            retorno = valida[3] + valida[4] + fone;
          }
        }
      }
    }
  }
  return retorno;
}

function validaFormulario() {
  let nome = document.getElementById("nome").value.trim();
  let email = document.getElementById("email").value.trim();
  let telefone = document.getElementById("whatsapp").value;
  let telefoneValidado = validaTelefoneNacional(telefone);
  let tamanhoEmpresa = document.querySelector('select[name="tamanho-empresa"]').value;
  let radioButtonVR = document.querySelector('input[name="enviar"]:checked');

  if (nome == "" || nome == null || nome.lenght == 0 || nome == undefined) {
    document.getElementById("nome").focus();
    shake();
  } else if (email == "" || email == null || email.lenght == 0 || email == undefined || email.indexOf("@") == -1) {
    document.getElementById("email").focus();
    shake();
  } else if (telefoneValidado == false) {
    document.getElementById("whatsapp").focus();
    shake();
  } else if (tamanhoEmpresa <= 0 || tamanhoEmpresa > 5) {
    document.getElementById("tamanhoEmpresa").focus();
    shake();
    document.getElementById("vr-text-form2").innerHTML = "Preencha o tamanho da empresa."
  } else if (radioButtonVR == null || radioButtonVR == false || radioButtonVR == "") {
    document.getElementById("tamanhoEmpresa").focus();
    shake();
    document.getElementById("vr-text-form2").innerHTML = "Marque todas as opções."
  }
}

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

// Carrossel Benefícios 1
var indicatorAceitoEmTodoPais = document.getElementById('indicatorAceitoEmTodoPais');
var indicadorCreditoRapido = document.getElementById('indicatorCreditoRapido');
var indicatorCustoZero = document.getElementById('indicatorCustoZero');
var indicatorAplicativoExclusivo = document.getElementById('indicatorAplicativoExclusivo');
var carouselBeneficios1 = document.getElementById('contentCarouselBeneficios1');

function moveCarouselAceitoEmTodoPais() {
  carouselBeneficios1.scrollLeft = 0;
  indicatorAceitoEmTodoPais.classList.add('active');
  indicadorCreditoRapido.classList.remove('active');
  indicatorCustoZero.classList.remove('active');
  indicatorAplicativoExclusivo.classList.remove('active');
}

function moveCarouselCreditoRapido() {
  carouselBeneficios1.scrollLeft = 320;
  indicatorAceitoEmTodoPais.classList.remove('active');
  indicadorCreditoRapido.classList.add('active');
  indicatorCustoZero.classList.remove('active');
  indicatorAplicativoExclusivo.classList.remove('active');
}

function moveCarouselCustoZero() {
  carouselBeneficios1.scrollLeft = 650;
  indicatorAceitoEmTodoPais.classList.remove('active');
  indicadorCreditoRapido.classList.remove('active');
  indicatorCustoZero.classList.add('active');
  indicatorAplicativoExclusivo.classList.remove('active');
}

function moveCarouselAplicativoExclusivo() {
  carouselBeneficios1.scrollLeft = 970;
  indicatorAceitoEmTodoPais.classList.remove('active');
  indicadorCreditoRapido.classList.remove('active');
  indicatorCustoZero.classList.remove('active');
  indicatorAplicativoExclusivo.classList.add('active');
}

carouselBeneficios1.addEventListener("scroll", function () {
  var scrollAtual = this.scrollLeft;
  console.log(scrollAtual);
  if ((scrollAtual >= 0) && (scrollAtual < 260)) {
    indicatorAceitoEmTodoPais.classList.add('active');
    indicadorCreditoRapido.classList.remove('active');
    indicatorCustoZero.classList.remove('active');
    indicatorAplicativoExclusivo.classList.remove('active');
  } else if ((scrollAtual >= 260) && (scrollAtual < 600)) {
    indicatorAceitoEmTodoPais.classList.remove('active');
    indicadorCreditoRapido.classList.add('active');
    indicatorCustoZero.classList.remove('active');
    indicatorAplicativoExclusivo.classList.remove('active');
  } else if ((scrollAtual >= 600) && (scrollAtual < 900)) {
    indicatorAceitoEmTodoPais.classList.remove('active');
    indicadorCreditoRapido.classList.remove('active');
    indicatorCustoZero.classList.add('active');
    indicatorAplicativoExclusivo.classList.remove('active');
  } else {
    indicatorAceitoEmTodoPais.classList.remove('active');
    indicadorCreditoRapido.classList.remove('active');
    indicatorCustoZero.classList.remove('active');
    indicatorAplicativoExclusivo.classList.add('active');
  }
});
// Fim carrossel Benefícios 1

// Carrossel Serviços adicionais
var indicatorRefeicao = document.getElementById('indicatorRefeicao');
var indicatorVRVA = document.getElementById('indicatorVRVA');
var indicatorMultibeneficios = document.getElementById('indicatorMultibeneficios');
var indicatorAuto = document.getElementById('indicatorAuto');
var indicatorTransporte = document.getElementById('indicatorTransporte');
var indicatorCultura = document.getElementById('indicatorCultura');
var carouselServicosAdicionais = document.getElementById('contentCarouselServicosAdicionais');

function moveCarouselRefeicao() {
  carouselServicosAdicionais.scrollLeft = 0;
  indicatorRefeicao.classList.add('active');
  indicatorVRVA.classList.remove('active');
  indicatorMultibeneficios.classList.remove('active');
  indicatorAuto.classList.remove('active');
  indicatorTransporte.classList.remove('active');
  indicatorCultura.classList.remove('active');
}

function moveCarouselVRVA() {
  indicatorRefeicao.classList.remove('active');
  indicatorVRVA.classList.add('active');
  indicatorMultibeneficios.classList.remove('active');
  indicatorAuto.classList.remove('active');
  indicatorTransporte.classList.remove('active');
  indicatorCultura.classList.remove('active');
  if (window.innerWidth < 768) {
    carouselServicosAdicionais.scrollLeft = 320;
  } else {
    carouselServicosAdicionais.scrollLeft = 1065;
  }
}

function moveCarouselMultibeneficios() {
  carouselServicosAdicionais.scrollLeft = 650;
  indicatorRefeicao.classList.remove('active');
  indicatorVRVA.classList.remove('active');
  indicatorMultibeneficios.classList.add('active');
  indicatorAuto.classList.remove('active');
  indicatorTransporte.classList.remove('active');
  indicatorCultura.classList.remove('active');
}

function moveCarouselAuto() {
  carouselServicosAdicionais.scrollLeft = 985;
  indicatorRefeicao.classList.remove('active');
  indicatorVRVA.classList.remove('active');
  indicatorMultibeneficios.classList.remove('active');
  indicatorAuto.classList.add('active');
  indicatorTransporte.classList.remove('active');
  indicatorCultura.classList.remove('active');
}

function moveCarouselTransporte() {
  carouselServicosAdicionais.scrollLeft = 1315;
  indicatorRefeicao.classList.remove('active');
  indicatorVRVA.classList.remove('active');
  indicatorMultibeneficios.classList.remove('active');
  indicatorAuto.classList.remove('active');
  indicatorTransporte.classList.add('active');
  indicatorCultura.classList.remove('active');
}

function moveCarouselCultura() {
  carouselServicosAdicionais.scrollLeft = 1700;
  indicatorRefeicao.classList.remove('active');
  indicatorVRVA.classList.remove('active');
  indicatorMultibeneficios.classList.remove('active');
  indicatorAuto.classList.remove('active');
  indicatorTransporte.classList.remove('active');
  indicatorCultura.classList.add('active');
}

carouselServicosAdicionais.addEventListener("scroll", function () {
  var scrollAtual = this.scrollLeft;
  if (window.innerWidth < 768) {
    if ((scrollAtual >= 0) && (scrollAtual < 260)) {
      indicatorRefeicao.classList.add('active');
      indicatorVRVA.classList.remove('active');
      indicatorMultibeneficios.classList.remove('active');
      indicatorAuto.classList.remove('active');
      indicatorTransporte.classList.remove('active');
      indicatorCultura.classList.remove('active');
    } else if ((scrollAtual >= 260) && (scrollAtual < 600)) {
      indicatorRefeicao.classList.remove('active');
      indicatorVRVA.classList.add('active');
      indicatorMultibeneficios.classList.remove('active');
      indicatorAuto.classList.remove('active');
      indicatorTransporte.classList.remove('active');
      indicatorCultura.classList.remove('active');
    } else if ((scrollAtual >= 600) && (scrollAtual < 900)) {
      indicatorRefeicao.classList.remove('active');
      indicatorVRVA.classList.remove('active');
      indicatorMultibeneficios.classList.add('active');
      indicatorAuto.classList.remove('active');
      indicatorTransporte.classList.remove('active');
      indicatorCultura.classList.remove('active');
    } else if ((scrollAtual >= 900) && (scrollAtual < 1200)) {
      indicatorRefeicao.classList.remove('active');
      indicatorVRVA.classList.remove('active');
      indicatorMultibeneficios.classList.remove('active');
      indicatorAuto.classList.add('active');
      indicatorTransporte.classList.remove('active');
      indicatorCultura.classList.remove('active');
    } else if ((scrollAtual >= 1200) && (scrollAtual < 1500)) {
      indicatorRefeicao.classList.remove('active');
      indicatorVRVA.classList.remove('active');
      indicatorMultibeneficios.classList.remove('active');
      indicatorAuto.classList.remove('active');
      indicatorTransporte.classList.add('active');
      indicatorCultura.classList.remove('active');
    } else {
      indicatorRefeicao.classList.remove('active');
      indicatorVRVA.classList.remove('active');
      indicatorMultibeneficios.classList.remove('active');
      indicatorAuto.classList.remove('active');
      indicatorTransporte.classList.remove('active');
      indicatorCultura.classList.add('active');
    }
  }
});

/*loadCustomCarousel = function () {
  var isDragging = false;
  var lastPos = 0;
  var bloco3Wrapper = document.getElementById('carousel-indicators-servicos-adicionais');
  var disableChildren = false;
  bloco3Wrapper.addEventListener('mouseup',function () {
    console.log('teste 1');
    isDragging = false;
    // bloco3Wrapper.children().css('pointer-events', 'all');
  })
  bloco3Wrapper.addEventListener('mousedown',function (evt) {
    console.log('teste 2');
    lastPos = evt.pageX;
    isDragging = true;
    disableChildren = true;
  })
  bloco3Wrapper.addEventListener('mousemove', function (evt) {
    console.log('teste 3');
    if (isDragging) {
      if (disableChildren) {
        // bloco3Wrapper.children().css('pointer-events', 'none');
        disableChildren = false
      }
      bloco3Wrapper.scrollLeft = bloco3Wrapper.scrollLeft - (evt.pageX - lastPos);
      lastPos = evt.pageX;
    }
  });
},
loadCustomCarousel();*/
// Fim carrossel Serviços adicionais

// Carrossel Depoimentos
var indicatorDepoimento1 = document.getElementById('indicatorDepoimento1');
var indicatorDepoimento2 = document.getElementById('indicatorDepoimento2');
var indicatorDepoimento3 = document.getElementById('indicatorDepoimento3');
var indicatorDepoimento4 = document.getElementById('indicatorDepoimento4');
var carouselDepoimentos = document.getElementById('contentCarouselDepoimentos');

function moveCarouselDepoimento1() {
  carouselDepoimentos.scrollLeft = 0;
  indicatorDepoimento1.classList.add('active');
  indicatorDepoimento2.classList.remove('active');
  indicatorDepoimento3.classList.remove('active');
  indicatorDepoimento4.classList.remove('active');
}

function moveCarouselDepoimento2() {
  indicatorDepoimento1.classList.remove('active');
  indicatorDepoimento2.classList.add('active');
  indicatorDepoimento3.classList.remove('active');
  indicatorDepoimento4.classList.remove('active');
  if (window.innerWidth < 768) {
    carouselDepoimentos.scrollLeft = 330;
  } else {
    carouselDepoimentos.scrollLeft = 1065;
  }
}

function moveCarouselDepoimento3() {
  carouselDepoimentos.scrollLeft = 660;
  indicatorDepoimento1.classList.remove('active');
  indicatorDepoimento2.classList.remove('active');
  indicatorDepoimento3.classList.add('active');
  indicatorDepoimento4.classList.remove('active');
}

function moveCarouselDepoimento4() {
  carouselDepoimentos.scrollLeft = 995;
  indicatorDepoimento1.classList.remove('active');
  indicatorDepoimento2.classList.remove('active');
  indicatorDepoimento3.classList.remove('active');
  indicatorDepoimento4.classList.add('active');
}

carouselDepoimentos.addEventListener("scroll", function () {
  var scrollAtual = this.scrollLeft;
  if (window.innerWidth < 768) {
    if ((scrollAtual >= 0) && (scrollAtual < 260)) {
      indicatorDepoimento1.classList.add('active');
      indicatorDepoimento2.classList.remove('active');
      indicatorDepoimento3.classList.remove('active');
      indicatorDepoimento4.classList.remove('active');
    } else if ((scrollAtual >= 260) && (scrollAtual < 600)) {
      indicatorDepoimento1.classList.remove('active');
      indicatorDepoimento2.classList.add('active');
      indicatorDepoimento3.classList.remove('active');
      indicatorDepoimento4.classList.remove('active');
    } else if ((scrollAtual >= 600) && (scrollAtual < 900)) {
      indicatorDepoimento1.classList.remove('active');
      indicatorDepoimento2.classList.remove('active');
      indicatorDepoimento3.classList.add('active');
      indicatorDepoimento4.classList.remove('active');
    } else {
      indicatorDepoimento1.classList.remove('active');
      indicatorDepoimento2.classList.remove('active');
      indicatorDepoimento3.classList.remove('active');
      indicatorDepoimento4.classList.add('active');
    }
  }
});

function animateFixedFaq() {
  window.addEventListener("scroll", function () {
    var scroll = this.scrollY;
    console.log(scroll);
    var faqFixed = document.getElementById('faqFixed');
    if (window.innerWidth > 768) {
      if (scroll < 3850) {
        faqFixed.style.position = 'absolute';
        faqFixed.style.top = '2%';
      } else if ((scroll >= 3850) && (scroll < 6600)) {
        faqFixed.style.position = 'fixed';
        faqFixed.style.top = '55%';
      } else {
        faqFixed.style.position = 'absolute';
        faqFixed.style.top = '91%';
      }
    }
  });
}
animateFixedFaq()

// function showLinesPink() {
//   window.addEventListener("scroll", function () {
//     var scroll = this.scrollY;
//     var linhaBeneficios = document.getElementsByClassName('linha-texto-vr-beneficios2');
//     if (window.innerWidth > 768) {
//       if ((scroll >= 430) && (scroll < 800)) {
//         linhaBeneficios.style.animation = 'showLinePinkBeneficios .4s linear forwards';
//       } else {
//         linhaBeneficios.style.animation = 'none';
//       }
//     }
//   });
// }
// showLinesPink()

var scrollInicial = this.scrollY;
scroll(scrollInicial, 0);

function clickContrateVR() {
  if (window.innerWidth < 768) {
    scroll(scrollInicial, 390);
  } else {
    scroll(scrollInicial, 0);
  }
}

function mouseDentroMenu1() {
  document.getElementById('vr-botao-submenu').classList.add("vr-botao-submenu-hover");
}

function mouseForaMenu1() {
  document.getElementById('vr-botao-submenu').classList.remove("vr-botao-submenu-hover");
}

function mouseDentroMenu2() {
  document.getElementById('vr-botao-submenu2').classList.add("vr-botao-submenu-hover");
}

function mouseForaMenu2() {
  document.getElementById('vr-botao-submenu2').classList.remove("vr-botao-submenu-hover");
}

function mouseDentroMenu3() {
  document.getElementById('vr-botao-submenu3').classList.add("vr-botao-submenu-hover");
}

function mouseForaMenu3() {
  document.getElementById('vr-botao-submenu3').classList.remove("vr-botao-submenu-hover");
}

function mouseDentroMenu4() {
  document.getElementById('vr-botao-submenu4').classList.add("vr-botao-submenu-hover");
}

function mouseForaMenu4() {
  document.getElementById('vr-botao-submenu4').classList.remove("vr-botao-submenu-hover");
}

/*Início Artigo util*/
function artigoUtil(button) {
  if (button == 'like1') {
    document.getElementById(button).classList.toggle("fa-thumbs-up-click");
    document.getElementById('dislike1').classList.remove("fa-thumbs-down-click");
  } else if (button == 'dislike1') {
    document.getElementById(button).classList.toggle("fa-thumbs-down-click");
    document.getElementById('like1').classList.remove("fa-thumbs-up-click");
  }

  if (button == 'like2') {
    document.getElementById(button).classList.toggle("fa-thumbs-up-click");
    document.getElementById('dislike2').classList.remove("fa-thumbs-down-click");
  } else if (button == 'dislike2') {
    document.getElementById(button).classList.toggle("fa-thumbs-down-click");
    document.getElementById('like2').classList.remove("fa-thumbs-up-click");
  }

  if (button == 'like3') {
    document.getElementById(button).classList.toggle("fa-thumbs-up-click");
    document.getElementById('dislike3').classList.remove("fa-thumbs-down-click");
  } else if (button == 'dislike3') {
    document.getElementById(button).classList.toggle("fa-thumbs-down-click");
    document.getElementById('like3').classList.remove("fa-thumbs-up-click");
  }

  if (button == 'like4') {
    document.getElementById(button).classList.toggle("fa-thumbs-up-click");
    document.getElementById('dislike4').classList.remove("fa-thumbs-down-click");
  } else if (button == 'dislike4') {
    document.getElementById(button).classList.toggle("fa-thumbs-down-click");
    document.getElementById('like4').classList.remove("fa-thumbs-up-click");
  }

  if (button == 'like5') {
    document.getElementById(button).classList.toggle("fa-thumbs-up-click");
    document.getElementById('dislike5').classList.remove("fa-thumbs-down-click");
  } else if (button == 'dislike5') {
    document.getElementById(button).classList.toggle("fa-thumbs-down-click");
    document.getElementById('like5').classList.remove("fa-thumbs-up-click");
  }

  if (button == 'like6') {
    document.getElementById(button).classList.toggle("fa-thumbs-up-click");
    document.getElementById('dislike6').classList.remove("fa-thumbs-down-click");
  } else if (button == 'dislike6') {
    document.getElementById(button).classList.toggle("fa-thumbs-down-click");
    document.getElementById('like6').classList.remove("fa-thumbs-up-click");
  }

  if (button == 'like7') {
    document.getElementById(button).classList.toggle("fa-thumbs-up-click");
    document.getElementById('dislike7').classList.remove("fa-thumbs-down-click");
  } else if (button == 'dislike7') {
    document.getElementById(button).classList.toggle("fa-thumbs-down-click");
    document.getElementById('like7').classList.remove("fa-thumbs-up-click");
  }

  if (button == 'like8') {
    document.getElementById(button).classList.toggle("fa-thumbs-up-click");
    document.getElementById('dislike8').classList.remove("fa-thumbs-down-click");
  } else if (button == 'dislike8') {
    document.getElementById(button).classList.toggle("fa-thumbs-down-click");
    document.getElementById('like8').classList.remove("fa-thumbs-up-click");
  }

  if (button == 'like9') {
    document.getElementById(button).classList.toggle("fa-thumbs-up-click");
    document.getElementById('dislike9').classList.remove("fa-thumbs-down-click");
  } else if (button == 'dislike9') {
    document.getElementById(button).classList.toggle("fa-thumbs-down-click");
    document.getElementById('like9').classList.remove("fa-thumbs-up-click");
  }

  if (button == 'like10') {
    document.getElementById(button).classList.toggle("fa-thumbs-up-click");
    document.getElementById('dislike10').classList.remove("fa-thumbs-down-click");
  } else if (button == 'dislike10') {
    document.getElementById(button).classList.toggle("fa-thumbs-down-click");
    document.getElementById('like10').classList.remove("fa-thumbs-up-click");
  }

  if (button == 'like11') {
    document.getElementById(button).classList.toggle("fa-thumbs-up-click");
    document.getElementById('dislike11').classList.remove("fa-thumbs-down-click");
  } else if (button == 'dislike11') {
    document.getElementById(button).classList.toggle("fa-thumbs-down-click");
    document.getElementById('like11').classList.remove("fa-thumbs-up-click");
  }
}
/*Fim Artigo util*/




