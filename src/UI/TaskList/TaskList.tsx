import React from 'react';
import { Link } from 'react-router-dom';

export enum TaskListItemStatus {
  Complete,
  Incomplete,
}

export interface TaskListTask {
  to: string;
  content: string;
  hint?: string;
  statusText: string;
  statusTag: TaskListItemStatus;
}

export interface TaskListProps {
  identifier: string;
  tasks: TaskListTask[];
}

export const TaskList = ({ identifier, tasks }: TaskListProps) => {
  return (
    <>
      {tasks && tasks.length > 0 && (
        <ul className="govuk-task-list" key={identifier}>
          {tasks.map((task: TaskListTask, index) => {
            let ariaDesc = `${identifier}-${index}-status`;
            if (task.hint) {
              ariaDesc = `${identifier}-${index}-hint ` + ariaDesc;
            }
            const linkAttr = {
              className: 'govuk-link govuk-task-list__link',
              'aria-describedby': ariaDesc,
            };
            return (
              <li
                className="govuk-task-list__item govuk-task-list__item--with-link"
                key={`${identifier}-${index}`}
              >
                <div className="govuk-task-list__name-and-hint">
                  <Link to={task.to} {...linkAttr}>
                    {task.content}
                  </Link>
                  {task.hint && (
                    <div
                      id={`${identifier}-${index}-hint`}
                      className="govuk-task-list__hint"
                    >
                      {task.hint}
                    </div>
                  )}
                </div>
                <div
                  className="govuk-task-list__status"
                  id={`${identifier}-${index}-status`}
                >
                  {task.statusTag === TaskListItemStatus.Complete ? (
                    task.statusText
                  ) : (
                    <strong className="govuk-tag govuk-tag--blue">
                      {task.statusText}
                    </strong>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
