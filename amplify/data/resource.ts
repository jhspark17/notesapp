import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Note: a
    .model({
      name:a.string(),
      description: a.string(),
      image: a.string(),
    })
    .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});

/*
The following updated code uses a per-owner authorization
rule allow.owner() to restrict the note record’s access to
the owner of the record. 

Amplify will automatically add anowner: a.string() 
field to each note which contains the note owner's
identity information upon record creation.
*/