basic.forever(function () {
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x7f00ff)
})
basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(80, 80)
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x7f00ff)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.motors(80, 20)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x00ff00)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.motors(20, 80)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff0000)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x00ff00)
    }
})
