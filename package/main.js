import { RandomUtils } from "./utils/randomUtils.mjs";
import { DocumentUtils } from "./utils/documentUtils.mjs";

const ref = {
    usernameDiv: document.getElementById("usernames"),
    genPrompt: document.getElementById("genPrompt")
}

RandomUtils.LoadRandomWords("randomWords.json");

document.addEventListener("keydown", (e) => {
    if (RandomUtils.IsAwaiting) {
        return;
    }

    if (e.key === " ") {
        if (RandomUtils.RandomWords.length === 0) {
            return;
        }

        RandomUtils.RandomName().then((username) => {
            if (ref.genPrompt !== undefined) {
                ref.usernameDiv.removeChild(ref.genPrompt);
                ref.genPrompt = undefined;
            }
            ref.usernameDiv.appendChild(DocumentUtils.newText(username, "name"))
        });
    }
});
