import { socioLocationId } from "./TransientState.js"

const handleLocationChange = (changeEvent) => {
    if (changeEvent.target.name === "location") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        socioLocationId(convertedToInteger)
    }
}

// Original Code - WORKING:
// export const LocationTypeChoices = async() => {

//     document.addEventListener("change", handleLocationChange)

//     const response = await fetch("http://localhost:8088/socioLocations")
//     const locations = await response.json()

//     let choicesHTML = "<h2>Which type of area do you live in?</h2>"
//     for (const location of locations) {
//         choicesHTML += `<input type='radio' name='location' value='${location.id}' />${location.label}`
//     }

//     return choicesHTML
// }

// Explorer Code - using Array.map() instead of for...of loops:
export const LocationTypeChoices = async() => {

    document.addEventListener("change", handleLocationChange)

    const response = await fetch("http://localhost:8088/socioLocations")
    const locations = await response.json()

    let choicesHTML = "<h2>Which type of area do you live in?</h2>"

    let locationDivs = locations.map(
        (location) => {
            return`
            <input type='radio' name='location' value='${location.id}' />${location.label}
            `
        }
    )

    choicesHTML += locationDivs.join("")

    return choicesHTML
}