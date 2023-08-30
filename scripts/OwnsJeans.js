import { setOwnsBlueJeans } from "./TransientState.js"

const handleOwnershipChange = (changeEvent) => {
    if (changeEvent.target.name === "ownsJeans") {
        const convertedToBoolean = JSON.parse(changeEvent.target.value)
        setOwnsBlueJeans(convertedToBoolean)
    }
}

export const OwnsJeansChoices = () => {

    document.addEventListener("change", handleOwnershipChange)

    let choicesHTML = "<h1>Do you own jeans?</h1>"
    choicesHTML += "<input type='radio' name='ownsJeans' value=true /> Yes"
    choicesHTML += "<input type='radio' name='ownsJeans' value=false /> No"

    return choicesHTML
}