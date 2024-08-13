import { Platform } from "react-native";

const height = Platform.OS === 'ios' ? 'h-32' : 'h-24'
const paddingBottom = Platform.OS === 'ios' ? 'pb-8' : ''

export { height, paddingBottom }