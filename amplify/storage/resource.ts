import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "amplifyNotesDrive",
  access: (allow) => ({
    "media/{entity_id}/*": [
      allow.entity("identity").to(["read", "write", "delete"]),
    ],
  }),
});


// The updated code will set up the access so that only the person 
// who uploads the image can access. The code will use the entity_id 
// as a reserved token that will be replaced with the users' identifier 
// when the file is being uploaded. 
