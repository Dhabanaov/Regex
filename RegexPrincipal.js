// g - global 
// i 
const {
    padrao,
    codigo
} = require('./main');

function FuncaoPrincipal() {
    var result = [];
    if (!(/[#[A-z]\w*]* <[A-z]*.[A-z]>/).exec(codigo[0])) {

        if (!(/[#[A-z]\w*]*</.exec(codigo[0]))) {
            //codigo[0]
            result = console.log('A declaração esta errada:[ ' + codigo[0] + ' ] a certa é:', padrao[0]);
        }

        if (!/#include \w*<\w([A-z]*.[h])*>*/.exec(codigo[0])) {
            //codigo[0]
            result = console.log('A declaração esta errada: [ ' + codigo[0] + ' ]certa é:', padrao[0]);
        }

        if (!/#include <[A-z]*.[A-z]>/.exec(codigo[0])) {
            //codigo[0]
            result = console.log('A declaração esta errada:[ ' + codigo[0] + ' ] a certa é:', padrao[0]);
        }
    } else {
        result = console.log('O Sintaxe do cabeçalho esta correta:');
    }



    if (!/[A-z]* [A-z]*\(\)/.exec(codigo[1])) {

        if (!/int main\(\)/.exec(codigo[1])) {
            result = console.log('A declaração da função esta errada:[ ' + codigo[1] + ' ]. A certa é:', padrao[1]);
        }
        if (!/int main\(\)/.exec(codigo[1])) {
            result = console.log('O corpo da função esta errada:[ ' + codigo[1] + ' ] a certa:', padrao[1]);
        }
        if (!(/{/.exec(codigo[2]))) {
            result = console.log('A função esta incorreta [ ' + codigo[2] + ' ]. precisa de um ' + padrao[2] + ' e ' + padrao[11]);
        }

        if (!/[A-z]+(\s)([A-z]+(,)?(\s)?)+;/.exec(codigo[3])) {
            result = console.log('A Declare precisa de um ";" [ ' + codigo[3] + ' ]. no final');
        }
        if (!/[a-z]* [0-9]/.exec(codigo[10])) {
            result = console.log('A declaração de retorno está incorreta: [ ' + codigo[10] + ' ] a certa é:', padrao[10]);
        }
        if (!/return [0-9]/.exec(codigo[10])) {
            result = console.log('A declaração de retorno está incorreta [ ' + codigo[10] + ' ] a certa é:', padrao[10]);
        }
        if (!/return [0-9];/.exec(codigo[10])) {
            result = console.log('Falta um ; ' + codigo[10] + 'no final do retorno:');
        }

        if (/\s*([A-Za-z_]\w*)\s*=\s*([A-z]+\s+(\+|-|\*|\/|%|\+\+|--)\s+[A-z]+)/.exec(codigo[9])) {
            result = console.log('Atribuição esta dos variaveis errada [ ' + codigo[9] + ' ] a certa é:', padrao[9]);
        }
    } else {
        result = console.log('O Sintaxe de Função principal esta correta.');
    }


    if (!/printf\(.*\);/.exec(codigo[4])) {

        if (!/printf\((("?)([^"]+(\s)*)*(")*([A-z]*)\));/.exec(codigo[4])) {
            //codigo[4]
            result = console.log('Adicione um ;[ ' + codigo[4] + ' ] na declarção o certo é:', padrao[4]);
        }
        if (!/printf\(("?)([^"]+(\s)*)*("?)(,)*([A-z]*(,)*)\);/.exec(codigo[6])) {
            //codigo[6]
            result = console.log('Digite alguma coisa!');
        }
    } else {
        result = console.log('O Sintaxe de codigo printf esta correta.');
    }

    if (!/scanf\(.*\);/.exec(codigo[5])) {

        if (!/scanf\(.*\);/.exec(codigo[5])) {
            //codigo[5]
            result = console.log('Adicione um ; [ ' + codigo[5] + ' ] o certo é:', padrao[5]);
        }
        if (!/scanf*\((\s)*("((%)+[A-z]+(\s)*)+"(\s)*,(\s)*)(&[a-z]+)(\s)*\);/.exec(codigo[7])) {
            //codigo[7]
            result = console.log('O corpo esta incorreta:' + codigo[7]);
        }
    } else {
        result = console.log('O Sintaxe Codigo scanf esta correta.');
    }
}
module.exports = {
    FuncaoPrincipal
}