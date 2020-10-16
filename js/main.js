(() => {
    const profPanel = document.querySelector(".profPanelText");
    const profImg = document.querySelector(".profPanel img");
    const courseInfo = document.querySelector(".courseInfo");
    const weeklySched = document.querySelector(".weeklySched")
    

    // Fetch API
    fetch("./data/classData.json")
        .then((res) => res.json())
        .then((data) => {
            const courseName = profPanel.children[0];
            const courseProfessor = profPanel.children[1];
            const courseTimes = profPanel.children[2];

            // Course Name
            courseName.textContent = data.coursename;

            // Course Code
            let spanElem = document.createElement("span");
            spanElem.textContent = " - " + data.coursecode;
            spanElem.classList.add('text-primary')
            courseName.appendChild(spanElem);

            // Professor
            courseProfessor.textContent = "Professor - " + data.profname;

            // Times section
            const times = data.classtime;
            times.forEach((time) => {
                const li = document.createElement("li");
                li.textContent = time;

                courseTimes.appendChild(li);
            });

            // Prof Img source
            profImg.src = `images/${data.profimg}`


            // Course Name
            courseInfo.children[0].textContent = data.coursename;

            // Course description
            courseInfo.children[3].textContent = data.coursedesc;

            // Course Content
            const content = weeklySched.children[1];
            const contentInfo = data.coursecontent;
            contentInfo.forEach((info) => {
                const li = document.createElement("li");
                li.textContent = info;

                content.appendChild(li);
            });


        })
        .catch((err) => {
            console.log(err);
            profPanel.children[1].textContent = "Error - Try again later";
        });
})();
