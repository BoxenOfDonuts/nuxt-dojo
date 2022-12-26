export default defineEventHandler(async (event) => {
  // // handle query params
  // const { name } = getQuery(event);

  // // hand post data
  // const { age } = await readBody(event);

  // api call with pricate key
  const { data } = await $fetch("https://api.currencyapi.com/v3/latest", {
    query: {
      apikey: "asfs",
    },
  });

  return {
    data,
  };
});
