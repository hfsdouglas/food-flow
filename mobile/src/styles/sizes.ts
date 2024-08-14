import { Platform } from "react-native";

const height = Platform.OS === 'ios' ? 'h-32' : 'h-24'
const heightDefaultHeader = Platform.OS === 'ios' ? 'h-28' : 'h-20'
const paddingBottom = Platform.OS === 'ios' ? 'pb-8' : ''
const paddingTop = Platform.OS === 'ios' ? 'pt-8' : 'pt-8'

export { height, heightDefaultHeader, paddingBottom, paddingTop }