import { OwnsJeansChoices } from "./OwnsJeans.js"
import { SaveSubmission } from "./SaveSubmission.js"
import { SubmissionList } from "./Submissions.js"
import { LocationTypeChoices } from "./UrbanDweller.js"

const containter = document.querySelector("#container")

const render = async() => {
    const jeanOwnershipHTML = OwnsJeansChoices()
    const locationsHTML = await LocationTypeChoices()
    const buttonHTML = await SaveSubmission()
    const submissionsHTML = await SubmissionList()



    containter.innerHTML = 
    `
        ${jeanOwnershipHTML}
        ${locationsHTML}
        ${buttonHTML}
        ${submissionsHTML}
    `
}

document.addEventListener("newSubmissionCreated", render)

render()