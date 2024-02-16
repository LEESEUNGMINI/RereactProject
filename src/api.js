export async function expressTest() {
  try {
    return await fetch(
      "https://openapi.foodsafetykorea.go.kr/api/100e982ab52b4da983f3/COOKRCP01/json/1/200"
    ).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
