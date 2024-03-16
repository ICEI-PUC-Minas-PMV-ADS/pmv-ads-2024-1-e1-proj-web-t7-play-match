# Especificação do Projeto

## Perfis de Usuários

Perfis de Usuários


<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 01 - Jogador </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Indivíduo que prática ou pretende praticar algum esporte. (iniciante, intermediário, avançado)</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td> 
1) Acesso à localização de quadras esportivas. 
2) Acesso ao quadro de horários de quadras esportivas. 
3) Acesso a contato de equipes esportivas. (iniciante/intermediário/avançado) com vaga para novos jogadores.</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 02 - Gestor da Quadra </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Indivíduo que administra uma quadra esportiva.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td> 
1) Divulgação de horários disponíveis de sua quadra. 
2) Acesso à informação de clientes que tenham efetuado um reserva em sua quadra. 
3) Divulgação de localização de sua quadra. 
4) Divulgação dos meios de contato com a quadra (telefones, redes sociais, e-mail).</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 03 - Professor </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Indivíduo que ministra aulas de alguma(s) modalidade(s) esportiva(s). </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td> 
1) Divulgação de horários disponíveis de sua agenda.
2) Acesso à informação de alunos que tenham feito agendamento de aulas. 
3) Divulgação de suas credenciais para potenciais alunos. </td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 04 - Alunos </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Indivíduo que busca professores para aprender ou treinar alguma modalidade esportiva. </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td> 
1) Acesso à localização de quadras esportivas.
2) Acesso ao quadro de horários de quadras esportivas. 
3) Acesso a contato de professores de modalidades esportivas. 
</td>
</tr>
</tbody>
</table>

## Histórias de Usuários


|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE`            |PARA ... `PORQUE`                                                                |
|--------------------|--------------------------------------|---------------------------------------------------------------------------------|
| Jogador            | Encontrar quadras esportivas         | Praticar atividade física                                                       |
| Jogador            | Encontrar equipes esportivas         | Conhecer novas pessoas com o mesmo objetivo                                     |
| Jogador            | Acessar quadro de horários das quadras | Para selecionar o melhor dia e hora para prática esportiva                    |
| Professor          | Encontrar alunos                     | Oferecer aulas de alguma modalidade esportiva                                   |
| Professor          | Encontrar quadras                    | Para dar aulas para meus alunos                                                 |
| Gestor da Quadra   | Encontrar clientes                   | Aumentar a lucratividade do estabelecimento                                     |
| Gestor da Quadra   | Divulgar quadro de horários          | Para que seus clientes possam ter a informação necessária para marcar um horário|
| Aluno              | Encontrar professores                 | Aprender alguma modalidade esportiva                                           |
| Aluno              | Encontrar quadras esportivas         | Para escolher a quadra na região desejada                                       |

## Requisitos do Projeto

### Requisitos Funcionais


|ID        | Descrição                       | Prioridade  |
|----------|---------------------------------|-------------|
| RF-01 | A aplicação deve permitir o cadastro de usuários | Alta |
| RF-02 | A aplicação deve permitir que os usuários cadastrados acessem suas contas| Alta |
| RF-03 | A aplicação deve permitir cadastro de quadras | Alta |
| RF-04 | A aplicação deve permitir acesso aos quadros de horários das quadras | Alta |
| RF-05 | A aplicação deve permitir acesso às modalidades esportivas disponíveis nas quadras cadastradas | Alta |
| RF-06 | A aplicação deve restringir algumas funcionalidades para usuários não cadastrados (RF-07, RF-11, RF-12, RF-13, RF-17, RF-18,RF-20, RF-25)| Alta |
| RF-07 | A aplicação deve permitir que o usuário faça a reserva de horário mediante pagamento | Média |
| RF-08 | A aplicação deve fornecer informações sobre a disponibilidade das quadras que gravam partidas  | Baixa |
| RF-09 | A aplicação deve permitir que os gestor da quadra publique fotos do seu ambiente para facilitar a escolha dos jogadores | Média  |
| RF-10 | A aplicação deve possuir um sistema de filtro de pesquisa que permita os usuários encontrarem quadras | Média |
| RF-11 | A aplicação deve oferecer um recurso de filtro de níveis dos usuários jogadores cadastrados | Baixa |
| RF-12 | A aplicação deve permitir que os usuários avaliem as quadras | Média |
| RF-13 | A aplicação deve oferecer funcionalidade de pesquisa de interesses dos usuários permitindo que eles se encontrem com mais facilidade | Baixa |
| RF-14 | A aplicação deve permitir que o usuário localize por região | Alta |
| RF-15 | A aplicação deve permitir que o usuário encontre professores de modalidades esportivas | Média |
| RF-16 | A aplicação deve permitir o cadastro e criação de perfil de professores de modalidades esportivas | Alta |
| RF-17 | A aplicação deve fazer a confirmação do agendamento mediante pagamento da reserva | Média |
| RF-18 | A aplicação deve permitir que o usuário faça pagamento online da reserva | Alta |
| RF-19 | A aplicação deve permitir a utilização de cupons de desconto | Baixa |
| RF-20 | A aplicação deve enviar notificações para informar usuários sobre disponibilidade de quadras e/ou horários disponíveis | Média |
| RF-21 | A aplicação deve permitir que o usuário filtre quadras por modalidades esportivas disponíveis | Alta |
| RF-22 | A aplicação deve recomendar quadras de acordo com a(s) modalidade(s) esportiva(s) selecionadas pelo usuário | Alta |
| RF-23 | A aplicação deve permitir que o usuário filtre os tipos de quadra   | Alta |
| RF-24 | A aplicação deve permitir que o usuário acesse os perfis de professores de modalidades esportivas | Alta   |
| RF-25 | A aplicação deve permitir que o usuário acesse histórico e comprovantes de pagamentos | Alta |

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais


|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 | A aplicação deve ser compatível com dispositivos de múltiplas plataformas (desktop, tablet, smartphone) | Alta | 
| RNF-02 | A aplicação deve ser publicada em um ambiente acessível público na Internet | Alta | 
| RNF-03 | A aplicação deve ter bom nível de contraste entre os elementos da tela | Média | 
| RNF-04 | A aplicação deve ser compatível com os principais navegadores do mercado: Google Chrome, Firefox, Microsoft Edge | Alta | 
| RNF-05 | A aplicação deve ter uma interface adequada ao público-alvo | Alta | 
| RNF-06 | A aplicação deve ter escalabilidade, permitindo 10.000 acessos por minuto | Alta | 
| RNF-07 | A aplicação deve ser fácil de manter e atualizar | Alta | 
| RNF-08 | A aplicação deve ter disponibilidade, para isso deve ter redundância de servidores | Alta | 
| RNF-09 | A aplicação deve proteger os dados dos usuários cadastrados, de acordo com a LGPD | Alta | 
| RNF-10 | A aplicação deve ser desenvolvida em CSS, HTML e JavaScript | Alta | 
**Prioridade: Alta / Média / Baixa. 

