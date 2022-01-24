// gdbus call --session --dest org.gnome.Shell --object-path /org/gnome/Shell/Extensions/MoveResize --method org.gnome.Shell.Extensions.MoveResize.Call "'firefox'" 1 0 0 400 800

const { Gio } = imports.gi;

const DBUS_INTERFACE = `
<node>
    <interface name="ch.vennard.gnomeshell.tool">
        <method name="UnsafeMode">
            <arg type="b" direction="in" name="enabled"/>
        </method>
    </interface>
</node>`;

class Extension {
    enable() {
        this._dbus = Gio.DBusExportedObject.wrapJSObject(DBUS_INTERFACE, this);
        this._dbus.export(Gio.DBus.session, '/ch/vennard/gnomeshell/tool');
    }

    disable() {
        this._dbus.flush();
        this._dbus.unexport();
        delete this._dbus;
    }

    UnsafeMode(enabled) {
        if (enabled == true) {
            global.context.unsafe_mode = true;
        } else {
            global.context.unsafe_mode = false; 
        }
    }
}

function init() {
    return new Extension();
}
