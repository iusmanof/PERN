import { $authHost, $host } from "./index";

export const createType = async type => {
  const { data } = await $authHost.post("api/type", type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get("api/type");
  return data;
};

export const createBrand = async brand => {
  const { data } = await $authHost.post("api/brand", brand);
  return data;
};

export const fetchBrands = async () => {
  const { data } = await $host.get("api/brand");
  return data;
};

export const createDevice = async device => {
  const { name, price, img, brandId, typeId } = Object.fromEntries(device);
  const dataNew = { name, price, img, brandId, typeId };
  const { data } = await $authHost.post("api/device", dataNew);
  return data;
};

export const fetchDevices = async (typeId, brandId, page, limit) => {
  const { data } = await $host.get("api/device", {
    params: {
      typeId,
      brandId,
      page,
      limit,
    },
  });
  return data;
};

export const fetchOneDevice = async id => {
  const { data } = await $host.get("api/device/" + id);
  return data;
};
