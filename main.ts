input.onButtonPressed(Button.A, function () {
	
})
let x_axis = 2
led.plot(x_axis, 4)
basic.forever(function () {
    while (input.isGesture(Gesture.TiltLeft)) {
        if (x_axis > 0) {
            led.unplot(x_axis, 4)
            x_axis += -1
            led.plot(x_axis, 4)
        }
        basic.pause(625)
    }
})
basic.forever(function () {
    while (input.isGesture(Gesture.TiltRight)) {
        if (x_axis < 4) {
            led.unplot(x_axis, 4)
            x_axis += 1
            led.plot(x_axis, 4)
        }
        basic.pause(625)
    }
})
