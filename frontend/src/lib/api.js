import { axiosInstance } from "./axios";

export async function getStreamToken(url) {
	const response = await axiosInstance.get("/chat/token");
	return response.data;
}
