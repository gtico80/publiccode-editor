let {REPOSITORY, ELASTIC_URL} = process.env;

export const privacyPolicyUrl = `https://developers.italia.it/it/privacy-policy/`;
export const repositoryUrl = `https://docs.italia.it/italia/developers-italia/publiccodeyml/it/master/`;
export const versionsUrl = `https://api.github.com/repos/${REPOSITORY}/contents/version`;
export const sampleUrl = `https://raw.githubusercontent.com/italia/publiccode.yml/master/docs/it/example/publiccode.minimal.yml`;
export const elasticUrl = ELASTIC_URL || '';
export const APP_FORM = "appForm";
