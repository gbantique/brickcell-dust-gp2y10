//% color="#FFBF00" icon="\uf12e" weight=70
namespace Brickcell {
    // Define variables to store pin numbers for LED control and output
    let ledControl: DigitalPin;
    let analogVoltage: AnalogPin;

    /**
     * Set the Vo and LED pin of GP2Y10 Dust sensor.
     * @param outPin is pin where the analog output is connected.
     * @param ledPin is pin where the LED control is connected.
     */
    //% block="Initialize GP2Y10 Dust Sensor:|ADC Pin %outPin|Control Pin %ledPin"
    //% blockId=brickcell_dust_gp2y10_init
    //% subcategory="dust gp2y10"
    export function initializeFineDustSensor(outPin: AnalogPin, ledPin: DigitalPin): void {
        analogVoltage = outPin;
        ledControl = ledPin;
    }

    /**
     * Get the GP2Y10 Dust sensor reading.
     */
    //% block="Read GP2Y10 Dust sensor"
    //% blockId=brickcell_dust_gp2y10_read
    //% subcategory="dust gp2y10"
    export function readFineDust(): number {
        // Step 1: Set the LED control pin
        pins.digitalWritePin(ledControl, 1);

        // Step 2: Wait for 300 microseconds
        control.waitMicros(300);

        // Step 3: Read the analog value of analogVoltage pin
        let measuredVoltage = pins.analogReadPin(analogVoltage);

        // Step 4: Clear the LED control pin
        pins.digitalWritePin(ledControl, 0);

        return measuredVoltage; // Return the measured voltage
    }
}