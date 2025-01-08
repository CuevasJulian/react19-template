const mapStrings = {
  testing: 'testing',
  testing_n_and_y: 'testing %n and %y',
};

type stgProps = keyof typeof mapStrings;

type options = {
  replace: { [key: string]: string };
};

export default function stg(stgProp: stgProps, options?: options): string {
  if (options) {
    const keys = Object.keys(options.replace);
    let textToReplace = `${mapStrings[stgProp]}`;
    keys.forEach((key) => {
      textToReplace = textToReplace.replace(key, options.replace[key]);
    });
    return textToReplace;
  }
  return mapStrings[stgProp];
}
