const padrao = [
  '#include <stdio.h>',
 'int main()',
  '{',
  'int a, b, c;',
  'printf("Digite o numero:");',
  'scanf("%d",&a);',
  ' printf("Digite outro numero:");',
  'scanf("%d",&b);',
  'c = a + b;',
  'printf("A soma é: %d",c);',
  'return 0;',
  '}'
];
const codigo = [
  '#include <stdio.h>',
 'int main()',
  '{',
  'int a, b, c ;',
  'printf("Digite o numero:");',
  'scanf("%d",&a);',
  'printf("Digite outro numero:");',
  'scanf("%d",&b);',
  'c = a + b;',
  'printf("A soma é: %d",c);',
  'return 0;',
  '}'
];
module.exports = {
  padrao,
  codigo
}