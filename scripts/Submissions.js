export const SubmissionList = async () => {
    // Get the submissions from your API
    const response = await fetch("http://localhost:8088/submissions")
    const submissions = await response.json()
    let submissionHTML = ""

    // Original Code - WORKING:
    // Iterate the submissions and create some <section> representations
    // for (const submission of submissions) {
    //     submissionHTML += 
    //     `
    //     <section class="submission" data-type="submission" data-sub-id="${submission.id}">
    //         <ul>
    //             <li>Owns Jeans? ${submission.ownsBlueJeans}</li>
    //             <li>Area type foreign key? ${submission.socioLocationId}</li>
    //         <ul>
    //     </section>
    //     `
    // }

    // Explorer Code - using Array.map() instead of for...of loops:
    let submissionDivs = submissions.map(
        (submission) => {
            return `
            <section class="submission" data-type="submission" data-sub-id="${submission.id}">
                <ul>
                    <li>Owns Jeans? ${submission.ownsBlueJeans}</li>
                    <li>Area type foreign key? ${submission.socioLocationId}</li>
                <ul>
            </section>
            `
        }
    )

    submissionHTML += submissionDivs.join("")
    
    // Return the HTML string
    return submissionHTML
}