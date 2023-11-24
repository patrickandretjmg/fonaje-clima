const translateText = async (text) => {
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=pt&dt=t&q=${encodeURI(
      text ?? 'Unexpected error'
        )}`
      const result = await fetch(url).then(res => res.json())
      const translatedText = result[0][0][0]
      return translatedText
}