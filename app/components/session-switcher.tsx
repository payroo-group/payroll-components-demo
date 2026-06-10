import * as React from "react";
import { RotateCcw, UserCog } from "lucide-react";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "~/components/ui/popover";
import { useSession } from "~/hooks/use-session";

/**
 * Floating demo widget to switch the session account/user at runtime.
 * Applied values persist to localStorage; reset returns to env/defaults.
 */
export function SessionSwitcher() {
    const { accountId, userId, isCustomized, setSession, resetSession } =
        useSession();
    const [open, setOpen] = React.useState(false);
    const [draftAccountId, setDraftAccountId] = React.useState(accountId);
    const [draftUserId, setDraftUserId] = React.useState(userId);

    // Sync drafts whenever the popover opens or active values change.
    React.useEffect(() => {
        if (open) {
            setDraftAccountId(accountId);
            setDraftUserId(userId);
        }
    }, [open, accountId, userId]);

    const canApply =
        draftAccountId.trim().length > 0 &&
        draftUserId.trim().length > 0 &&
        (draftAccountId.trim() !== accountId || draftUserId.trim() !== userId);

    const handleApply = (event: React.FormEvent) => {
        event.preventDefault();
        if (!canApply) return;
        setSession({
            accountId: draftAccountId.trim(),
            userId: draftUserId.trim(),
        });
        setOpen(false);
    };

    const handleReset = () => {
        resetSession();
        setOpen(false);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="fixed bottom-4 right-4 z-50 rounded-full shadow-lg"
                    title="Switch demo account"
                >
                    <UserCog className="size-4" />
                    {isCustomized && (
                        <span className="absolute -top-0.5 -right-0.5 size-2.5 rounded-full bg-primary" />
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent align="end" side="top" className="w-96">
                <form onSubmit={handleApply} className="grid gap-4">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <h4 className="font-medium leading-none">
                                Demo session
                            </h4>
                            <Badge
                                variant={isCustomized ? "default" : "secondary"}
                            >
                                {isCustomized ? "Custom" : "Default"}
                            </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Switch the account used by the embedded payroll
                            components.
                        </p>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="session-account-id">Account ID</Label>
                        <Input
                            id="session-account-id"
                            value={draftAccountId}
                            onChange={(e) => setDraftAccountId(e.target.value)}
                            placeholder="Account UUID"
                            autoComplete="off"
                            spellCheck={false}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="session-user-id">User ID</Label>
                        <Input
                            id="session-user-id"
                            value={draftUserId}
                            onChange={(e) => setDraftUserId(e.target.value)}
                            placeholder="User UUID"
                            autoComplete="off"
                            spellCheck={false}
                        />
                    </div>
                    <div className="flex justify-end gap-2">
                        <Button
                            type="button"
                            variant="ghost"
                            onClick={handleReset}
                            disabled={!isCustomized}
                        >
                            <RotateCcw className="size-4" />
                            Reset
                        </Button>
                        <Button type="submit" disabled={!canApply}>
                            Apply
                        </Button>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    );
}
