export const LoadFonts = async () => {
  const fonts = [
    {
      name: "TexGyreAdventorBold",
      url: process.env.PROJECT_URL+"/assets/fonts/texgyreadventor/texgyreadventor-bold.otf",
    },
    {
      name: "Antipasto",
      url: process.env.PROJECT_URL+"/assets/fonts/antipasto/AntipastoPro-Bold.ttf",
    },
    {
      name: "AntoniaRetro",
      url: process.env.PROJECT_URL+"/assets/fonts/antonia-retro/AntoniaRetro.ttf",
    },
    {
      name: "BebasNeue",
      url: process.env.PROJECT_URL+"/assets/fonts/bebas-neue/BebasNeue-Regular.ttf",
    },
    {
      name: "BloomsFree",
      url: process.env.PROJECT_URL+"/assets/fonts/blooms/BloomsFree.ttf",
    },
    {
      name: "Metropolis",
      url: process.env.PROJECT_URL+"/assets/fonts/metropolis/Metropolis-Medium.otf",
    },
    {
      name: "OpenSansItalic",
      url: process.env.PROJECT_URL+"/assets/fonts/open-sans/OpenSans-Italic.ttf",
    }
  ];

  await Promise.all(
    fonts.map(async ({ name, url }) => {
      const font = new FontFace(name, `url(${url})`);

      try {
        const loadedFont = await font.load();
        document.fonts.add(loadedFont);
      } catch (error) {
        console.error(`Failed to load font: ${name}`, error);
      }
    })
  );
};