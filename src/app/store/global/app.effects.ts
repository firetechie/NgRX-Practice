import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { emptyAction, showAlert } from "./app.action";
import { exhaustMap, map } from "rxjs";
import { MasterService } from "../../shared/service/master.service";

@Injectable()

export class AppEffects {
    constructor(private action$: Actions, private service: MasterService) { }

    _showAlert = createEffect(() => {
        return this.action$.pipe(
            ofType(showAlert),
            exhaustMap((action) => {
                return this.service.showSnackbarAlert(action.message, action.actionResult).afterDismissed().pipe(
                    map(() => emptyAction())
                );
            })
        );
    });
}