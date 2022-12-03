def on_button_pressed_a():
    if test2 == "tempeture":
        basic.show_string("Very Good!")
        music.play_melody("C5 A G C5 A B C5 C5 ", 200)
        basic.show_string("Okay lets connect to bluetooth now")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    if test2 == "tempeture":
        basic.show_string("Very strange")
        basic.show_string("Please save a copy of this code and import it to another microbit")
input.on_button_pressed(Button.B, on_button_pressed_b)

test2 = ""
select = False
test2 = "nothing"
proceed = "False"
basic.show_string("...")
music.play_melody("G D E A - B - C5 ", 200)
basic.show_string("Welcome!")
basic.show_animation("""
    # . . . #
                        . . . . .
                        . . # . .
                        # . . . #
                        . # # # .
""")
basic.show_string("Lets start")
basic.show_string("Is the tempeture(F)   ")
basic.show_number(input.temperature() * 1.8 + 35)
basic.show_string("A for yes B for no")
test2 = "tempeture"