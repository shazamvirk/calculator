        let string = "";
        let input = document.querySelector('.input')
        let buttons = document.querySelectorAll('.button');
        let arr = Array.from(buttons);
        arr.forEach((button) => {
            button.addEventListener('click', (e) => {

                if (e.target.innerHTML == '=') {
                    string = eval(string);
                    input.value = string;
                }
                else if (e.target.innerHTML == 'AC') {
                    string = "";
                    input.value = string;
                }
                else if (e.target.innerHTML == 'DE') {

                    string = string.slice(0, string.length - 1);
                    input.value = string;
                }
                else {
                    console.log(e.target);
                    string = string + e.target.innerHTML;
                    input.value = string;
                }
            });

        });