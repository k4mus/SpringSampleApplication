import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SpringSampleApplicationRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { SpringSampleApplicationCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { SpringSampleApplicationLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { SpringSampleApplicationDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { SpringSampleApplicationTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { SpringSampleApplicationEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { SpringSampleApplicationJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { SpringSampleApplicationJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        SpringSampleApplicationRegionMySuffixModule,
        SpringSampleApplicationCountryMySuffixModule,
        SpringSampleApplicationLocationMySuffixModule,
        SpringSampleApplicationDepartmentMySuffixModule,
        SpringSampleApplicationTaskMySuffixModule,
        SpringSampleApplicationEmployeeMySuffixModule,
        SpringSampleApplicationJobMySuffixModule,
        SpringSampleApplicationJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SpringSampleApplicationEntityModule {}
