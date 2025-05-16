const submissionButton = document.querySelector("#submissionButton");
const addIcon = document.querySelector("#addIcon");
const addCalendar = document.querySelector("#addCalendar");
const submissionContent = document.querySelector(".submissionContent");
const submissionText = document.querySelector(".submissionText");

const thesisForm = document.querySelector("#thesisForm");
const time = document.querySelector("#startTime");

function clickSubmissionButton() {
    addCalendar.classList.remove("hidden");
    addIcon.classList.add("hidden");

    submissionContent.classList.remove("hidden");
    submissionText.classList.add("hidden");
}

thesisForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const startTime = time.value;

    await fetch("https://submitthesis-men42ug4ia-uc.a.run.app", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ startTime }),
    });

    window.location.href = "/activity";
});
