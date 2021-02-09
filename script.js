
        let nb = document.querySelector(".navbar2");
        let divda = document.querySelector(".divda");
        happy = "true";

        divda.addEventListener("click", () => {
            if (happy == "true") {
                nb.classList.add("hello");
                happy = "false";
            } else {
                nb.classList.remove("hello");
                happy = "true";
            }
        })
  
