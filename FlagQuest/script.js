const flags = [
    { country: "Afghanistan", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg" },
    { country: "Albania", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg" },
    { country: "Algeria", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg" },
    { country: "Andorra", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg" },
    { country: "Angola", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg" },
    { country: "Antigua and Barbuda", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Antigua_and_Barbuda.svg" },
    { country: "Argentina", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1920px-Flag_of_Argentina.svg.png" },
    { country: "Armenia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg" },
    { country: "Australia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg" },
    { country: "Austria", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg" },
    { country: "Azerbaijan", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg" },
    { country: "Bahamas", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas.svg" },
    { country: "Bahrain", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg" },
    { country: "Bangladesh", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg" },
    { country: "Barbados", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados.svg" },
    { country: "Belarus", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg" },
    { country: "Belgium", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg" },
    { country: "Belize", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg" },
    { country: "Benin", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin.svg" },
    { country: "Bhutan", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg" },
    { country: "Bolivia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Bolivia.svg" },
    { country: "Bosnia and Herzegovina", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg" },
    { country: "Botswana", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Botswana.svg" },
    { country: "Brazil", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1920px-Flag_of_Brazil.svg.png" },
    { country: "Brunei", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei.svg" },
    { country: "Bulgaria", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg" },
    { country: "Burkina Faso", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg" },
    { country: "Burundi", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi.svg" },
    { country: "Cabo Verde", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Cape_Verde.svg" },
    { country: "Cambodia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia.svg" },
    { country: "Cameroon", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg" },
    { country: "Canada", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Flag_of_Canada.svg/1920px-Flag_of_Canada.svg.png" },
    { country: "Central African Republic", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Central_African_Republic.svg" },
    { country: "Chad", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Chad.svg" },
    { country: "Chile", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg" },
    { country: "China", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg" },
    { country: "Colombia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg" },
    { country: "Comoros", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_the_Comoros.svg" },
    { country: "Congo-Brazzaville", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_the_Republic_of_the_Congo.svg" },
    { country: "Congo-Kinshasa", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg" },
    { country: "Costa Rica", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Costa_Rica_%28state%29.svg" },
    { country: "Cote d'Ivoire", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg" },
    { country: "Croatia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg" },
    { country: "Cuba", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg" },
    { country: "Cyprus", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg" },
    { country: "Czech Republic", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg" },
    { country: "Denmark", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg" },
    { country: "Djibouti", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_Djibouti.svg" },
    { country: "Dominica", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Flag_of_Dominica.svg" },
    { country: "Dominican Republic", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Dominican_Republic.svg" },
    { country: "Ecuador", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg" },
    { country: "Egypt", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg" },
    { country: "El Salvador", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg" },
    { country: "Equatorial Guinea", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Equatorial_Guinea.svg" },
    { country: "Eritrea", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Eritrea.svg" },
    { country: "Estonia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg" },
    { country: "Eswatini", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Flag_of_Eswatini.svg" },
    { country: "Ethiopia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg" },
    { country: "Fiji", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Fiji.svg" },
    { country: "Finland", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg" },
    { country: "France", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1920px-Flag_of_France.svg.png" },
    { country: "Gabon", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/04/Flag_of_Gabon.svg" },
    { country: "Gambia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_The_Gambia.svg" },
    { country: "Georgia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg" },
    { country: "Germany", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1920px-Flag_of_Germany.svg.png" },
    { country: "Ghana", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg" },
    { country: "Greece", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg" },
    { country: "Grenada", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Grenada.svg" },
    { country: "Guatemala", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg" },
    { country: "Guinea", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Guinea.svg" },
    { country: "Guinea-Bissau", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Guinea-Bissau.svg" },
    { country: "Guyana", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg" },
    { country: "Haiti", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti.svg" },
    { country: "Honduras", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Honduras.svg" },
    { country: "Hungary", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg" },
    { country: "Iceland", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg" },
    { country: "India", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg" },
    { country: "Indonesia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg" },
    { country: "Iran", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg" },
    { country: "Iraq", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg" },
    { country: "Ireland", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg" },
    { country: "Italy", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1920px-Flag_of_Italy.svg.png" },
    { country: "Jamaica", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica.svg" },
    { country: "Japan", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1920px-Flag_of_Japan.svg.png" },
    { country: "Jordan", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg" },
    { country: "Kazakhstan", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg" },
    { country: "Kenya", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg" },
    { country: "Kiribati", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kiribati.svg" },
    { country: "Kosovo", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Flag_of_Kosovo.svg" },
    { country: "Kuwait", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait.svg" },
    { country: "Kyrgyzstan", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg" },
    { country: "Laos", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Laos.svg" },
    { country: "Latvia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg" },
    { country: "Lebanon", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg" },
    { country: "Lesotho", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Flag_of_Lesotho.svg" },
    { country: "Liberia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Liberia.svg" },
    { country: "Libya", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Libya.svg" },
    { country: "Liechtenstein", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Liechtenstein.svg" },
    { country: "Lithuania", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg" },
    { country: "Luxembourg", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg" },
    { country: "Madagascar", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Madagascar.svg" },
    { country: "Malawi", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Malawi.svg" },
    { country: "Malaysia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg" },
    { country: "Maldives", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Maldives.svg" },
    { country: "Mali", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali.svg" },
    { country: "Malta", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Malta.svg" },
    { country: "Marshall Islands", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_Marshall_Islands.svg" },
    { country: "Mauritania", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Mauritania.svg" },
    { country: "Mauritius", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius.svg" },
    { country: "Mexico", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg" },
    { country: "Micronesia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg" },
    { country: "Moldova", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova.svg" },
    { country: "Monaco", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg" },
    { country: "Mongolia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg" },
    { country: "Montenegro", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro.svg" },
    { country: "Morocco", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg" },
    { country: "Mozambique", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg" },
    { country: "Myanmar", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Myanmar.svg" },
    { country: "Namibia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Namibia.svg" },
    { country: "Nauru", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_Nauru.svg" },
    { country: "Nepal", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg" },
    { country: "Netherlands", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg" },
    { country: "New Zealand", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg" },
    { country: "Nicaragua", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg" },
    { country: "Niger", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Flag_of_Niger.svg" },
    { country: "North Macedonia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_North_Macedonia.svg" },
    { country: "North Korea", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_North_Korea.svg" },
    { country: "Norway", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg" },
    { country: "Oman", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman.svg" },
    { country: "Pakistan", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg" },
    { country: "Palau", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Palau.svg" },
    { country: "Palestine", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg" },
    { country: "Panama", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg" },
    { country: "Papua New Guinea", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Papua_New_Guinea.svg" },
    { country: "Paraguay", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg" },
    { country: "Peru", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg" },
    { country: "Philippines", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg" },
    { country: "Poland", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland.svg" },
    { country: "Portugal", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg" },
    { country: "Qatar", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg" },
    { country: "Romania", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg" },
    { country: "Russia", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1920px-Flag_of_Russia.svg.png" },
    { country: "Rwanda", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg" },
    { country: "Saint Kitts and Nevis", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg" },
    { country: "Saint Lucia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Saint_Lucia.svg" },
    { country: "Saint Vincent and the Grenadines", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg" },
    { country: "Samoa", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Samoa.svg" },
    { country: "San Marino", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_San_Marino.svg" },
    { country: "Sao Tome and Principe", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg" },
    { country: "Saudi Arabia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg" },
    { country: "Senegal", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg" },
    { country: "Serbia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg" },
    { country: "Seychelles", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Seychelles.svg" },
    { country: "Sierra Leone", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Sierra_Leone.svg" },
    { country: "Singapore", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg" },
    { country: "Slovakia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg" },
    { country: "Slovenia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg" },
    { country: "Solomon Islands", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Solomon_Islands.svg" },
    { country: "Somalia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Somalia.svg" },
    { country: "South Africa", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg" },
    { country: "South Sudan", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Flag_of_South_Sudan.svg" },
    { country: "South Korea", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg" },
    { country: "Spain", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1920px-Flag_of_Spain.svg.png" },
    { country: "Sri Lanka", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg" },
    { country: "Sudan", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan.svg" },
    { country: "Suriname", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname.svg" },
    { country: "Sweden", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1920px-Flag_of_Sweden.svg.png" },
    { country: "Switzerland", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg" },
    { country: "Syria", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Syria.svg" },
    { country: "Taiwan", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China.svg" },
    { country: "Tajikistan", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Tajikistan.svg" },
    { country: "Tanzania", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tanzania.svg" },
    { country: "Thailand", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg" },
    { country: "Timor-Leste", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_East_Timor.svg" },
    { country: "Togo", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_Togo.svg" },
    { country: "Tonga", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Tonga.svg" },
    { country: "Trinidad and Tobago", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago.svg" },
    { country: "Tunisia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg" },
    { country: "Turkey", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg" },
    { country: "Turkmenistan", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Turkmenistan.svg" },
    { country: "Tuvalu", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tuvalu.svg" },
    { country: "Uganda", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg" },
    { country: "Ukraine", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg" },
    { country: "United Arab Emirates", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg" },
    { country: "United Kingdom", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png" },
    { country: "United States", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png" },
    { country: "Uruguay", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg" },
    { country: "Uzbekistan", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg" },
    { country: "Vanuatu", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Vanuatu.svg" },
    { country: "Vatican City", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_the_Vatican_City.svg" },
    { country: "Venezuela", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Venezuela.svg" },
    { country: "Vietnam", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg" },
    { country: "Yemen", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg" },
    { country: "Zambia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia.svg" },
    { country: "Zimbabwe", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg" },
    // Add more flags with country names and image URLs
];
    
let currentFlagIndex = 0;
let score = 0;
let gameOver = false;
let timer;

shuffleArray(flags);

function startGame() {
    // Add your game logic here
    console.log("Game started!");
    // Hide the Start Game button once the game starts
    document.getElementById("startGameButton").style.display = "none";
    gameStart = true;
    shuffleArray(flags);
    displayFlag()
    gameOver = false;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayOptions(correctCountry, options) {
    const optionsContainer = document.getElementById("optionsContainer");
    optionsContainer.innerHTML = "";

    for (const option of options) {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.addEventListener("click", function () {
            checkGuess(option);
        });
        optionsContainer.appendChild(optionButton);
    }
}

function displayFlag() {
    clearTimeout(timer);
    const flagImage = document.getElementById("flagImage");
    flagImage.src = flags[currentFlagIndex].imageUrl;

    const correctCountry = flags[currentFlagIndex].country;

    // Generate two random distractor countries
    const allCountries = flags.map((flag) => flag.country);
    const distractorCountries = allCountries.filter((country) => country !== correctCountry);
    shuffleArray(distractorCountries);
    const options = [correctCountry, distractorCountries[0], distractorCountries[1]];
    shuffleArray(options);
    startTimer();

    // Display the options for the user to pick from
    displayOptions(correctCountry, options);
}

function checkGuess(selectedCountry) {
    if (gameOver) {
        return; // Ignore further guesses after the game is over
    }

    const resultText = document.getElementById("resultText");
    const correctCountry = flags[currentFlagIndex].country;

    if (selectedCountry === correctCountry) {
        score++; // Increment the score for a correct guess
        resultText.textContent = "Correct! Well done!";
    } else {
        resultText.textContent = "Incorrect. Game Over!";
        gameOver = true; // Set game over to true when the user makes a wrong guess
    }

    // Display the current score
    const scoreText = document.getElementById("scoreText");
    scoreText.textContent = "Score: " + score;

    // Disable all option buttons after the game is over
    const optionButtons = document.querySelectorAll("#optionsContainer button");
    optionButtons.forEach((button) => (button.disabled = gameOver));

    // Move to the next flag if the game is still ongoing
    if (!gameOver) {
        currentFlagIndex = (currentFlagIndex + 1) % flags.length;
        displayFlag();
    }
}

function shareScore() {
    if (!gameOver) {
        return; // Allow sharing score only when the game is over
    }

    const scoreText = "I scored " + score + " in the Flag Guessing Game!";
    const shareURL = "https://m7mdrahil.github.io/FlagQuest/"; // Replace with the actual URL for sharing

    console.log(scoreText);
    console.log(shareURL);

    const textarea = document.createElement('textarea');
    textarea.value = "Score: " + score + "\nPlay FlagQuest! at: " + shareURL;
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand('copy');

    // Remove the temporary textarea element
    document.body.removeChild(textarea);

    // For demonstration purposes, we'll display an alert with the score and share URL
    alert("Your score is copied to clipboard!" + "\nPlay FlagQuest at: " + shareURL);
}

function startTimer() {
    let timeLeft = 5;
    const timerText = document.getElementById("timerText");

    function updateTimer() {
        timerText.textContent = "Time left: " + timeLeft + "s";
        if (timeLeft === 0) {
            // If the timer runs out, end the game
            gameOver = true;
            resultText.textContent = "Time's up! Game Over!";
            // Disable all option buttons
            const optionButtons = document.querySelectorAll("#optionsContainer button");
            optionButtons.forEach((button) => (button.disabled = true));
            // Show the share score button
            document.getElementById("shareScoreButton").style.display = "block";
        } else {
            // If the timer is still running, decrement the timeLeft and call the function again after 1 second
            timeLeft--;
            timer = setTimeout(updateTimer, 1000);
        }
    }

    // Start the timer
    updateTimer();
}

// Load the first flag when the page loads
//displayFlag();