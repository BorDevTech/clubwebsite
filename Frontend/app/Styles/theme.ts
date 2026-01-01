import { createSystem, defaultConfig, defineTokens } from "@chakra-ui/react"
import { Colors } from "./colors"
import { Fonts } from "./fonts"


const tokens = defineTokens({
    fonts: {
        oxanium: { value: "Oxanium, sans-serif" },
        bungeeHairline: { value: "Bungee Hairline, sans-serif" },
    }, colors: {
        BrandBlue: { DEFAULT: { value: "#0C1429" } },
        BrandPurple: { DEFAULT: { value: "#57349B" } },
        BrandLightBlue: { DEFAULT: { value: "#44A7EA" } },
        BrandTurquoise: { DEFAULT: { value: "#4DA1FF" } },
        BrandWhite: { DEFAULT: { value: "#EBF1FF" } },
    },
})

export default createSystem(defaultConfig, { theme: { tokens } })

