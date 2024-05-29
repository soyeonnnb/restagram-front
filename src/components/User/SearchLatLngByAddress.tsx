import axios from "axios";

const SearchLatLngByAddress = async (address: string) => {
  const url =
    "https://dapi.kakao.com/v2/local/search/address.json?query=" + address;
  const {
    data: { documents },
  } = await axios({
    url,
    method: "get",
    headers: {
      Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}`,
    },
  });
  return {
    latitude: Number(documents[0].road_address.x),
    longitude: Number(documents[0].road_address.y),
  };
};

export default SearchLatLngByAddress;
