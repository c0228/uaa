export const initVariables = {
 createArticle:{
   modalStatus: 'close',
   form:{
      basicDetails:{
         category: '',
         subCategory: '',
         articleHeadline: '',
         desc: '',
         story: '',
         img: '',
         references: []
      },
      createPoll:[],
      hookIdeaMovement:{
         ideas:[],
         movements:[]
      }
   }
 }
};

export 
const updateInitVariables = (path, value, mode = 'replace') => {
  setInitVariables(prev => {
    const updated = structuredClone(prev);
    const keys = path.split('.');
    let current = updated;

    // Navigate to the target object
    keys.slice(0, -1).forEach(key => {
      current = current[key];
    });

    const lastKey = keys[keys.length - 1];

    // Perform the requested operation
    switch (mode) {
      case 'append':
        current[lastKey] = [
          ...current[lastKey],
          ...(Array.isArray(value) ? value : [value])
        ];
        break;

      case 'remove':
        current[lastKey] = current[lastKey].filter(
          (_, index) => index !== value
        );
        break;

      case 'replace':
      default:
        current[lastKey] = value;
        break;
    }

    return updated;
  });
};
