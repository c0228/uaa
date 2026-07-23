const projectUrl = window.location.origin;

const fonts = [
  {
    family: 'AntipastoProMedium',
    url: `${projectUrl}/assets/fonts/AntipastoPro-Medium.ttf`,
  },
  {
    family: 'BloomsFree',
    url: `${projectUrl}/assets/fonts/BloomsFree.ttf`,
  },
  {
    family: 'GeistMedium',
    url: `${projectUrl}/assets/fonts/Geist-Medium.ttf`,
  },
  {
    family: 'GeistRegular',
    url: `${projectUrl}/assets/fonts/Geist-Regular.ttf`,
  },
  {
    family: 'GeistSemiBold',
    url: `${projectUrl}/assets/fonts/Geist-SemiBold.ttf`,
  },
  {
    family: 'GeistThin',
    url: `${projectUrl}/assets/fonts/Geist-Thin.ttf`,
  },
  {
    family: 'MetropolisBold',
    url: `${projectUrl}/assets/fonts/Metropolis-Bold.otf`,
  },
  {
    family: 'NewtonExtraBold',
    url: `${projectUrl}/assets/fonts/Newton-ExtraBold.ttf`,
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