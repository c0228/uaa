const projectUrl = window.location.origin;

const fonts = [
  {
    family: 'BloomsFree',
    url: `${projectUrl}/assets/fonts/BloomsFree.ttf`,
  },
  {
    family: 'AntipastoProMedium',
    url: `${projectUrl}/assets/fonts/AntipastoPro-Medium.ttf`,
  },
  {
    family: 'NewtonExtraBold',
    url: `${projectUrl}/assets/fonts/Newton-ExtraBold.ttf`,
  },
  {
    family: 'MetropolisBold',
    url: `${projectUrl}/assets/fonts/Metropolis-Bold.otf`,
  },
];

const LoadFonts = async () => {
  await Promise.all(
    fonts.map(async ({ family, url }) => {
      const font = new FontFace(family, `url(${url})`);
      await font.load();
      document.fonts.add(font);
    })
  );
};

export default LoadFonts;